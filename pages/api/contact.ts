import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    return res.status(200).json({ ok: true, message: 'Contact form submitted successfully' })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end('Method Not Allowed')
}
