/**
 * GTM / GA4 dataLayer helpers — Sultan GHC
 *
 * Usage:
 *   import { pushLeadEvent, pushWhatsAppClick, pushPhoneCall } from '@/lib/gtm'
 *
 * In GTM, create a Custom Event trigger for each event name below,
 * then attach a GA4 Event tag → Event Name: {{Event}} to forward them to GA4.
 */

/**
 * Push a dataLayer event safely (no-ops if GTM hasn't loaded yet).
 * @param {Record<string, unknown>} payload
 */
function push(payload) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

/**
 * generate_lead — fired when the enquiry form is successfully submitted.
 * @param {{ treatment?: string, destination?: string }} options
 */
export function pushLeadEvent({ treatment = '', destination = '' } = {}) {
  push({
    event: 'generate_lead',
    lead_source: 'enquiry_form',
    treatment_interest: treatment,
    preferred_destination: destination,
  })
}

/**
 * whatsapp_click — fired when any WhatsApp CTA is clicked.
 * @param {{ location?: string }} options  e.g. 'floating_button' | 'hero' | 'treatment_page'
 */
export function pushWhatsAppClick({ location = 'unknown' } = {}) {
  push({
    event: 'whatsapp_click',
    click_location: location,
  })
}

/**
 * phone_call — fired when the phone number link is clicked.
 * @param {{ location?: string }} options
 */
export function pushPhoneCall({ location = 'unknown' } = {}) {
  push({
    event: 'phone_call',
    click_location: location,
  })
}

/**
 * file_upload_start — fired when a user selects a medical report to attach.
 */
export function pushFileUpload() {
  push({ event: 'file_upload_start' })
}
