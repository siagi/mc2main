import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next"
import { globalToken } from "./hello"

const MONGODB_URI:string ="mongodb+srv://michal:michal@cluster0.izabq.mongodb.net/?retryWrites=true&w=majority";

export default async function getAllNews(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const db = new MongoClient(MONGODB_URI);
    await db.connect();
    console.log('Connected to Mongo Database');
    const collectionNews = db.db('mc2main').collection('news');
    const allNews = (await collectionNews.find().toArray())
    res.status(200).json({news:allNews});
  }
  