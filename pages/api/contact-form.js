/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and *
 * will be treated as an API endpoint instead of a page.        *
 ****************************************************************/

import sendgrid from '@sendgrid/mail'
import { config } from '../../theme.config'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

// Visitors control both field names and values, so escape them before building the email HTML
const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`)

const getHtmlBody = (body) =>
  Object.entries(body).map(([key, value]) => {
    if (typeof value === 'boolean') {
      return value && escapeHtml(key)
    }
    if (value && typeof value === 'object') {
      return `<b>${escapeHtml(key)}</b>: ${getHtmlBody(value).filter(Boolean).join(', ')}`
    }
    return `<b>${escapeHtml(key)}</b>: ${escapeHtml(value ?? '')}`
  })

const contact = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  const { email } = req.body || {}
  const { recipient, sender, subject } = config.contactForm || {}

  if (!recipient) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.recipient] property in theme options.' })
  }
  if (!sender) {
    return res
      .status(400)
      .json({ error: 'Missing [config.contactForm.sender] property in theme options.' })
  }
  if (!email) {
    return res
      .status(400)
      .json({ error: 'Missing email address. Please provide a correct email address.' })
  }

  const html = getHtmlBody(req.body).filter(Boolean).join('<br />')

  try {
    await sendgrid.send({
      to: recipient, // Your email where you'll receive emails
      from: sender, // your website email address here
      replyTo: email,
      subject: req.body.subject || subject || 'Contact form entry',
      html,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default contact
