import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Этот endpoint — заглушка. Подключите почтовый сервис или serverless-функцию.
  if (req.method === 'POST') {
    // В реальном проекте: валидация, отправка на почту или сохранение
    res.status(200).json({ ok: true })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end('Method Not Allowed')
  }
}
