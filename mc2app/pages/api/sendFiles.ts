import { NextApiRequest, NextApiResponse } from "next";

export default function login(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    res.status(200).json({ name: 'John Doe' })
  }
  