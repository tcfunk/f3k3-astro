export const prerender = false
import type { APIRoute } from "astro"
import { google } from 'googleapis'

export const POST: APIRoute = async ({ request }) => {
  // Collect data from form.
  const data = await request.formData()

  // Check honeypot.
  const honeypot = data.get('subscribe_08b4ff56b5b2_49133')
  if (honeypot) {
    return new Response(
      JSON.stringify({
        message: 'An error occurred, try again later.'
      }), {
      status: 500
    })
  }

  console.log(import.meta.env)

  // Connect to google sheets api.
  const sheets = google.sheets('v4')
  const auth = new google.auth.GoogleAuth({
    credentials: {
      "type": "service_account",
      "project_id": import.meta.env.GOOGLE_PROJECT_ID,
      "private_key_id": import.meta.env.GOOGLE_PRIVATE_KEY_ID,
      "private_key": import.meta.env.GOOGLE_PRIVATE_KEY,
      "client_email": import.meta.env.GOOGLE_CLIENT_EMAIL,
      "client_id": import.meta.env.GOOGLE_CLIENT_ID,
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x510_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": import.meta.env.GOOGLE_CLIENT_X509_CERT_URL,
      "universe_domain": "googleapis.com"
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })
  google.options({auth: auth})

  const spreadsheetId = import.meta.env.GOOGLE_SHEET_ID
  const range = `contacts!A:E`

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [[
        data.get('name'),
        data.get('email'),
        data.get('location'),
        data.get('message'),
        data.get('phone'),
      ]]
    }
  })

  return new Response(
    JSON.stringify({
      message: response.statusText
    }), {
    status: response.status
  })

}