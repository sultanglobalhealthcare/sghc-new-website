import axios from "axios";

export async function POST(req) {
  try {
    const data = await req.json();

    const scriptLink = process.env.APP_SCRIPT_URL ;

    // Send data to your Google Apps Script endpoint
    const response = await axios.post(
      scriptLink,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return new Response(
      JSON.stringify({ success: true, data: response.data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending to Google Apps Script:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
