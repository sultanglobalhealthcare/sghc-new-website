// ═══════════════════════════════════════════════════════════════════════════
// Sultan GHC — Contact Form Handler
// Paste this entire file into the Apps Script editor and deploy as a Web App
//
// Sheet: https://docs.google.com/spreadsheets/d/1hmAXxJSgEObOVmpLMD6PK5fnnRVzUvMLppDpy2g3SSs
// ═══════════════════════════════════════════════════════════════════════════

const SHEET_ID        = '1hmAXxJSgEObOVmpLMD6PK5fnnRVzUvMLppDpy2g3SSs';
const SHEET_NAME      = 'Enquiries';
const NOTIFY_EMAIL    = 'sultanglobalhealthcare@gmail.com';
const CC_EMAIL        = 'info@sultanghc.com';
const DRIVE_FOLDER_ID = ''; // Optional: paste a Google Drive folder ID to organise attachments

// Sheet columns (in order)
const HEADERS = [
  'Enquiry ID',
  'Timestamp (EST)',
  'First Name',
  'Last Name',
  'Email',
  'Phone',
  'Treatment Interest',
  'Preferred Destination',
  'Message',
  'Attachment',
];

// ── Entry points ─────────────────────────────────────────────────────────────

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Sultan GHC form handler is active.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const firstName            = data.firstName            || '';
    const lastName             = data.lastName             || '';
    const email                = data.email                || '';
    const phone                = data.phone                || '';
    const treatmentInterest    = data.treatmentInterest    || '';
    const preferredDestination = data.preferredDestination || '';
    const message              = data.message              || '';
    const imageData            = data.image                || '';

    // 1. Generate unique enquiry ID
    const enquiryId = generateEnquiryId();

    // 2. Upload attachment to Google Drive (if provided)
    const attachmentLink = imageData ? uploadToDrive(imageData, enquiryId, firstName, lastName) : '';

    // 3. Save to Google Sheets
    saveToSheet({ enquiryId, firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, attachmentLink });

    // 4. Notify Sultan GHC team
    sendNotificationEmail({ enquiryId, firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, imageData, attachmentLink });

    // 5. Send thank-you email to patient
    if (email) sendThankYouEmail({ enquiryId, firstName, email });

    // 6. Return enquiry ID to the website
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, enquiryId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('doPost error: ' + err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── 1. Generate Enquiry ID (SGHC-YYYYMMDD-XXXX) ──────────────────────────────

function generateEnquiryId() {
  const now  = new Date();
  const zone = 'America/New_York';

  const year  = now.toLocaleString('en-US', { timeZone: zone, year:  'numeric' });
  const month = now.toLocaleString('en-US', { timeZone: zone, month: '2-digit' });
  const day   = now.toLocaleString('en-US', { timeZone: zone, day:   '2-digit' });
  const dateStr = `${year}${month}${day}`; // e.g. 20260911

  const prefix = `SGHC-${dateStr}-`;

  // Count existing IDs for today to get the next sequence number
  const ss    = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  let   seq   = 1;

  if (sheet && sheet.getLastRow() > 1) {
    const ids = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getValues().flat();
    const todayIds = ids.filter(id => String(id).startsWith(prefix));
    seq = todayIds.length + 1;
  }

  return `${prefix}${String(seq).padStart(4, '0')}`; // e.g. SGHC-20260911-0003
}

// ── 2. Upload attachment to Google Drive ─────────────────────────────────────

function uploadToDrive(imageData, enquiryId, firstName, lastName) {
  try {
    const base64    = imageData.split(',')[1];
    const mimeMatch = imageData.match(/data:([^;]+);/);
    const mimeType  = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
    const ext       = mimeType.split('/')[1] || 'file';
    const filename  = `${enquiryId}_${firstName}_${lastName}.${ext}`;

    const blob = Utilities.newBlob(Utilities.base64Decode(base64), mimeType, filename);

    let folder;
    if (DRIVE_FOLDER_ID) {
      folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    } else {
      const folders = DriveApp.getFoldersByName('Sultan GHC — Patient Reports');
      folder = folders.hasNext() ? folders.next() : DriveApp.createFolder('Sultan GHC — Patient Reports');
    }

    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return file.getUrl();
  } catch (err) {
    Logger.log('Drive upload error: ' + err.message);
    return '';
  }
}

// ── 3. Save to Google Sheets ─────────────────────────────────────────────────

function saveToSheet({ enquiryId, firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, attachmentLink }) {
  const ss    = SpreadsheetApp.openById(SHEET_ID);
  let   sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Always reset headers to match current column structure
  sheet.clearContents();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS])
    .setFontWeight('bold')
    .setBackground('#1e40af')
    .setFontColor('#ffffff')
    .setFontSize(11);
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 200);  // Enquiry ID
  sheet.setColumnWidth(2, 160);  // Timestamp
  sheet.setColumnWidth(3, 130);  // First Name
  sheet.setColumnWidth(4, 130);  // Last Name
  sheet.setColumnWidth(5, 200);  // Email
  sheet.setColumnWidth(6, 160);  // Phone
  sheet.setColumnWidth(7, 220);  // Treatment Interest
  sheet.setColumnWidth(8, 180);  // Preferred Destination
  sheet.setColumnWidth(9, 300);  // Message
  sheet.setColumnWidth(10, 200); // Attachment

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
  sheet.appendRow([enquiryId, timestamp, firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, attachmentLink]);
}

// ── 4. Notification email to Sultan GHC team ─────────────────────────────────

function sendNotificationEmail({ enquiryId, firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, imageData, attachmentLink }) {
  const subject  = `[${enquiryId}] New Patient Enquiry — ${firstName} ${lastName}`;
  const received = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

  const attachmentRow = attachmentLink
    ? `<tr style="border-top:1px solid #f3f4f6;">
        <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Attachment</td>
        <td style="padding:10px 0;"><a href="${attachmentLink}" style="color:#1e40af;font-weight:600;">View Medical Report →</a></td>
       </tr>`
    : '';

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

  <div style="background:#1e40af;padding:20px 32px;">
    <img src="https://www.sultanghc.com/sghc-new-logo.png" alt="Sultan GHC" width="130" style="display:block;margin:0 0 12px;filter:brightness(0) invert(1);" />
    <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:6px;padding:4px 12px;margin-bottom:8px;">
      <span style="color:#fff;font-size:12px;font-weight:700;letter-spacing:0.05em;">${enquiryId}</span>
    </div>
    <h2 style="color:#fff;margin:0;font-size:18px;font-weight:700;">New Patient Enquiry</h2>
    <p style="color:#bfdbfe;margin:4px 0 0;font-size:13px;">Received ${received} EST</p>
  </div>

  <div style="padding:28px 32px;background:#fff;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr>
        <td style="padding:10px 0;color:#6b7280;width:170px;vertical-align:top;">Enquiry ID</td>
        <td style="padding:10px 0;font-weight:700;color:#1e40af;font-size:15px;">${enquiryId}</td>
      </tr>
      <tr style="border-top:1px solid #f3f4f6;">
        <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Full Name</td>
        <td style="padding:10px 0;font-weight:700;color:#111827;">${firstName} ${lastName}</td>
      </tr>
      <tr style="border-top:1px solid #f3f4f6;">
        <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Email</td>
        <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#1e40af;font-weight:600;">${email}</a></td>
      </tr>
      <tr style="border-top:1px solid #f3f4f6;">
        <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Phone</td>
        <td style="padding:10px 0;"><a href="tel:${phone}" style="color:#1e40af;font-weight:600;">${phone}</a></td>
      </tr>
      <tr style="border-top:1px solid #f3f4f6;">
        <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Treatment Interest</td>
        <td style="padding:10px 0;color:#111827;">${escapeHtml(treatmentInterest) || '—'}</td>
      </tr>
      <tr style="border-top:1px solid #f3f4f6;">
        <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Preferred Destination</td>
        <td style="padding:10px 0;color:#111827;">${escapeHtml(preferredDestination) || '—'}</td>
      </tr>
      ${attachmentRow}
    </table>

    <div style="margin-top:20px;background:#eff6ff;border-left:4px solid #1e40af;border-radius:0 8px 8px 0;padding:16px 20px;">
      <p style="font-size:11px;font-weight:700;color:#1e40af;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.05em;">Patient Message</p>
      <p style="font-size:14px;color:#374151;line-height:1.7;margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>

    <div style="margin-top:24px;">
      <a href="mailto:${email}?subject=Re [${enquiryId}]: Your Sultan GHC Enquiry"
         style="display:inline-block;background:#1e40af;color:#fff;font-size:13px;font-weight:700;padding:10px 24px;border-radius:50px;text-decoration:none;margin:4px 8px 4px 0;">
        Reply by Email
      </a>
      <a href="https://wa.me/${phone.replace(/\D/g, '')}"
         style="display:inline-block;background:#22c55e;color:#fff;font-size:13px;font-weight:700;padding:10px 24px;border-radius:50px;text-decoration:none;margin:4px 0;">
        WhatsApp Patient
      </a>
    </div>
  </div>

  <div style="padding:14px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
    <p style="font-size:11px;color:#9ca3af;margin:0;">
      Sultan Global Health Care · <a href="https://www.sultanghc.com" style="color:#1e40af;">sultanghc.com</a> · +1-610-787-0713
    </p>
  </div>

</div>`;

  const options = {
    cc:       CC_EMAIL,
    htmlBody: htmlBody,
    replyTo:  email,
  };

  if (imageData && imageData.includes(',')) {
    try {
      const base64    = imageData.split(',')[1];
      const mimeMatch = imageData.match(/data:([^;]+);/);
      const mimeType  = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
      const ext       = mimeType.split('/')[1] || 'file';
      options.attachments = [
        Utilities.newBlob(
          Utilities.base64Decode(base64),
          mimeType,
          `${enquiryId}_${firstName}_${lastName}.${ext}`
        )
      ];
    } catch (attachErr) {
      Logger.log('Attachment error: ' + attachErr.message);
    }
  }

  MailApp.sendEmail(NOTIFY_EMAIL, subject, '', options);
}

// ── 5. Thank-you email to patient ────────────────────────────────────────────

function sendThankYouEmail({ enquiryId, firstName, email }) {
  const subject = `[${enquiryId}] We Have Received Your Enquiry — Sultan GHC`;

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

  <div style="background:#1e40af;padding:24px 32px;text-align:center;">
    <img src="https://www.sultanghc.com/sghc-new-logo.png" alt="Sultan Global Health Care" width="160" style="display:block;margin:0 auto 10px;max-width:100%;filter:brightness(0) invert(1);" />
    <p style="color:#bfdbfe;margin:0;font-size:13px;">Your Trusted Global Healthcare Concierge</p>
  </div>

  <div style="padding:36px 32px;background:#fff;text-align:center;">
    <h2 style="font-size:20px;font-weight:700;color:#111827;margin:0 0 14px;">Thank You, ${firstName}!</h2>
    <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 16px;max-width:440px;margin-left:auto;margin-right:auto;">
      We have received your enquiry. A dedicated patient coordinator will review your case and contact you within <strong>24–48 hours</strong>.
    </p>

    <!-- Enquiry ID badge -->
    <div style="display:inline-block;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 24px;margin:4px 0 24px;">
      <p style="font-size:11px;font-weight:700;color:#1e40af;margin:0 0 4px;text-transform:uppercase;letter-spacing:0.08em;">Your Enquiry Reference</p>
      <p style="font-size:20px;font-weight:800;color:#1e40af;margin:0;letter-spacing:0.05em;">${enquiryId}</p>
      <p style="font-size:11px;color:#6b7280;margin:4px 0 0;">Please quote this number in all future correspondence</p>
    </div>

    <p style="font-size:13px;color:#6b7280;line-height:1.6;margin:0 0 28px;">
      For urgent queries, reach us directly on WhatsApp or by phone — a real person responds, not a chatbot.
    </p>

    <div style="margin-bottom:8px;">
      <a href="https://wa.me/16107870713"
         style="display:inline-block;background:#22c55e;color:#fff;font-weight:700;font-size:14px;padding:13px 32px;border-radius:50px;text-decoration:none;margin:6px 8px;">
        💬 Chat on WhatsApp
      </a>
      <a href="tel:+16107870713"
         style="display:inline-block;background:#1e40af;color:#fff;font-weight:700;font-size:14px;padding:13px 32px;border-radius:50px;text-decoration:none;margin:6px 8px;">
        📞 +1-610-787-0713
      </a>
    </div>
  </div>

  <div style="padding:22px 32px;background:#eff6ff;border-top:1px solid #dbeafe;">
    <p style="font-size:12px;font-weight:700;color:#1e40af;margin:0 0 10px;text-transform:uppercase;letter-spacing:0.05em;">What Happens Next</p>
    <table style="width:100%;font-size:13px;color:#374151;">
      <tr>
        <td style="padding:5px 0;vertical-align:top;width:28px;"><span style="background:#1e40af;color:#fff;border-radius:50%;display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;font-size:11px;font-weight:700;">1</span></td>
        <td style="padding:5px 0 5px 8px;">Our medical team reviews your case &amp; reports</td>
      </tr>
      <tr>
        <td style="padding:5px 0;vertical-align:top;"><span style="background:#1e40af;color:#fff;border-radius:50%;display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;font-size:11px;font-weight:700;">2</span></td>
        <td style="padding:5px 0 5px 8px;">A dedicated patient coordinator is assigned to you</td>
      </tr>
      <tr>
        <td style="padding:5px 0;vertical-align:top;"><span style="background:#1e40af;color:#fff;border-radius:50%;display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;font-size:11px;font-weight:700;">3</span></td>
        <td style="padding:5px 0 5px 8px;">You receive hospital options, specialist profiles &amp; a written cost estimate</td>
      </tr>
    </table>
  </div>

  <div style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
    <p style="font-size:11px;color:#9ca3af;margin:0;line-height:1.8;">
      Sultan Global Health Care · <a href="https://www.sultanghc.com" style="color:#1e40af;">sultanghc.com</a><br>
      <a href="mailto:info@sultanghc.com" style="color:#1e40af;">info@sultanghc.com</a> · +1-610-787-0713<br><br>
      You received this email because you submitted an enquiry at sultanghc.com.<br>
      We never share your information with third parties.
    </p>
  </div>

</div>`;

  MailApp.sendEmail(email, subject, '', { htmlBody });
}

// ── Utility ──────────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;');
}
