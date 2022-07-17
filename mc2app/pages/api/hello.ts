// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Credentials } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next'

export let globalToken:Credentials;

export const setGlobalToken = (gt:Credentials) => {
  globalToken = gt;
} 


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('GT', globalToken)
  res.status(200).json({ name: 'John Doe' })
}
