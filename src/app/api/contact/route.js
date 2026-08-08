import axios from 'axios'

export async function POST(req) {
  try {
    const data = await req.json()

    const scriptUrl = process.env.CONTACT_SCRIPT_URL
    if (!scriptUrl) {
      return new Response(
        JSON.stringify({ success: false, error: 'Contact script URL not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    await axios.post(scriptUrl, data, {
      headers: { 'Content-Type': 'application/json' },
    })

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
