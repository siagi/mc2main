// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { logWithCode } from './authorize';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    console.log(req.query);
    const data = req.query as {
      code: string,
      scope: string
    }

    logWithCode(data.code, ()=>console.log('loginnn..'))
  
    // res.status(200).json({codePass:'success'})
    res.redirect('/dashboard/dashboard');


}
