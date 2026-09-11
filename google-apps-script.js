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

// ── Entry points ─────────────────────────────────────────────────────────────

// Handles browser GET requests (health check / accidental visits)
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
    const imageData            = data.image                || ''; // base64 data URL (optional)

    // 1. Upload attachment to Google Drive and get a shareable link
    const attachmentLink = imageData ? uploadToDrive(imageData, firstName, lastName) : '';

    // 2. Save enquiry to Google Sheets (separate columns)
    saveToSheet({ firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, attachmentLink });

    // 3. Notify Sultan GHC team (with CC and attachment if provided)
    sendNotificationEmail({ firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, imageData, attachmentLink });

    // 4. Send thank-you email to the patient
    if (email) sendThankYouEmail({ firstName, email });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('doPost error: ' + err.message);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── 1. Upload attachment to Google Drive ─────────────────────────────────────

function uploadToDrive(imageData, firstName, lastName) {
  try {
    const base64    = imageData.split(',')[1];
    const mimeMatch = imageData.match(/data:([^;]+);/);
    const mimeType  = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
    const ext       = mimeType.split('/')[1] || 'file';
    const filename  = `${firstName}_${lastName}_medical_report.${ext}`;

    const blob = Utilities.newBlob(Utilities.base64Decode(base64), mimeType, filename);

    let folder;
    if (DRIVE_FOLDER_ID) {
      folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    } else {
      // Save in a subfolder of My Drive called "Sultan GHC — Patient Reports"
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

// ── 2. Save to Google Sheets ─────────────────────────────────────────────────

function saveToSheet({ firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, attachmentLink }) {
  const ss    = SpreadsheetApp.openById(SHEET_ID);
  let   sheet = ss.getSheetByName(SHEET_NAME);

  // Create the sheet with headers if it doesn't exist yet
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = ['Timestamp (EST)', 'First Name', 'Last Name', 'Email', 'Phone', 'Treatment Interest', 'Preferred Destination', 'Message', 'Attachment'];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#1e40af').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.setColumnWidths(1, headers.length, 180);
  }

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
  sheet.appendRow([timestamp, firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, attachmentLink]);
}

// ── 3. Notification email to Sultan GHC team ─────────────────────────────────

function sendNotificationEmail({ firstName, lastName, email, phone, treatmentInterest, preferredDestination, message, imageData, attachmentLink }) {
  const subject  = `New Patient Enquiry — ${firstName} ${lastName}`;
  const received = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

  const attachmentRow = attachmentLink
    ? `<tr style="border-top:1px solid #f3f4f6;">
        <td style="padding:10px 0;color:#6b7280;vertical-align:top;">Attachment</td>
        <td style="padding:10px 0;"><a href="${attachmentLink}" style="color:#1e40af;font-weight:600;">View Medical Report →</a></td>
       </tr>`
    : '';

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

  <!-- Header -->
  <div style="background:#1e40af;padding:20px 32px;">
    <img src="https://www.sultanghc.com/sghc-new-logo.png" alt="Sultan GHC" width="130" style="display:block;margin:0 0 10px;filter:brightness(0) invert(1);" />
    <h2 style="color:#fff;margin:0;font-size:18px;font-weight:700;">New Patient Enquiry</h2>
    <p style="color:#bfdbfe;margin:4px 0 0;font-size:13px;">Received ${received} EST</p>
  </div>

  <!-- Patient details -->
  <div style="padding:28px 32px;background:#fff;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr>
        <td style="padding:10px 0;color:#6b7280;width:160px;vertical-align:top;">Full Name</td>
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

    <!-- Message block -->
    <div style="margin-top:20px;background:#eff6ff;border-left:4px solid #1e40af;border-radius:0 8px 8px 0;padding:16px 20px;">
      <p style="font-size:11px;font-weight:700;color:#1e40af;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.05em;">Patient Message</p>
      <p style="font-size:14px;color:#374151;line-height:1.7;margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>

    <!-- Quick reply buttons -->
    <div style="margin-top:24px;">
      <a href="mailto:${email}?subject=Re: Your Sultan GHC Enquiry"
         style="display:inline-block;background:#1e40af;color:#fff;font-size:13px;font-weight:700;padding:10px 24px;border-radius:50px;text-decoration:none;margin:4px 8px 4px 0;">
        Reply by Email
      </a>
      <a href="https://wa.me/${phone.replace(/\D/g, '')}"
         style="display:inline-block;background:#22c55e;color:#fff;font-size:13px;font-weight:700;padding:10px 24px;border-radius:50px;text-decoration:none;margin:4px 0;">
        WhatsApp Patient
      </a>
    </div>
  </div>

  <!-- Footer -->
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

  // Attach medical report if provided
  if (imageData && imageData.includes(',')) {
    try {
      const base64    = imageData.split(',')[1];
      const mimeMatch = imageData.match(/data:([^;]+);/);
      const mimeType  = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
      const ext       = mimeType.split('/')[1] || 'file';
      const blob      = Utilities.newBlob(
        Utilities.base64Decode(base64),
        mimeType,
        `medical_report_${firstName}_${lastName}.${ext}`
      );
      options.attachments = [blob];
    } catch (attachErr) {
      Logger.log('Attachment error: ' + attachErr.message);
    }
  }

  MailApp.sendEmail(NOTIFY_EMAIL, subject, '', options);
}

// ── 4. Thank-you email to patient ────────────────────────────────────────────

function sendThankYouEmail({ firstName, email }) {
  const subject = 'We Have Received Your Enquiry — Sultan GHC';

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

  <!-- Header -->
  <div style="background:#1e40af;padding:24px 32px;text-align:center;">
    <img src="https://www.sultanghc.com/sghc-new-logo.png" alt="Sultan Global Health Care" width="160" style="display:block;margin:0 auto 10px;max-width:100%;filter:brightness(0) invert(1);" />
    <p style="color:#bfdbfe;margin:0;font-size:13px;">Your Trusted Global Healthcare Concierge</p>
  </div>

  <!-- Body -->
  <div style="padding:36px 32px;background:#fff;text-align:center;">
    <div style="width:64px;height:64px;background:#d1fae5;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px;">
      <span style="font-size:28px;line-height:1;">✓</span>
    </div>
    <h2 style="font-size:20px;font-weight:700;color:#111827;margin:0 0 14px;">Thank You, ${firstName}!</h2>
    <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 16px;max-width:440px;margin-left:auto;margin-right:auto;">
      We have received your enquiry. A dedicated patient coordinator will review your case and contact you within <strong>24–48 hours</strong>.
    </p>
    <p style="font-size:13px;color:#6b7280;line-height:1.6;margin:0 0 28px;">
      For urgent queries, reach us directly on WhatsApp or by phone — a real person responds, not a chatbot.
    </p>

    <!-- CTA buttons -->
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

  <!-- What happens next -->
  <div style="padding:22px 32px;background:#eff6ff;border-top:1px solid #dbeafe;">
    <p style="font-size:12px;font-weight:700;color:#1e40af;margin:0 0 10px;text-transform:uppercase;letter-spacing:0.05em;">What Happens Next</p>
    <table style="width:100%;font-size:13px;color:#374151;">
      <tr>
        <td style="padding:5px 0;vertical-align:top;width:28px;"><span style="background:#1e40af;color:#fff;border-radius:50%;display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;font-size:11px;font-weight:700;">1</span></td>
        <td style="padding:5px 0;">Our medical team reviews your case &amp; reports</td>
      </tr>
      <tr>
        <td style="padding:5px 0;vertical-align:top;"><span style="background:#1e40af;color:#fff;border-radius:50%;display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;font-size:11px;font-weight:700;">2</span></td>
        <td style="padding:5px 0;">A dedicated patient coordinator is assigned to you</td>
      </tr>
      <tr>
        <td style="padding:5px 0;vertical-align:top;"><span style="background:#1e40af;color:#fff;border-radius:50%;display:inline-block;width:20px;height:20px;text-align:center;line-height:20px;font-size:11px;font-weight:700;">3</span></td>
        <td style="padding:5px 0;">You receive hospital options, specialist profiles &amp; a written cost estimate</td>
      </tr>
    </table>
  </div>

  <!-- Footer -->
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
