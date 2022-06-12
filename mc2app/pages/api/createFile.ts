import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import authorize from "./authorize";
import { oAuth2Client } from "./authorize";
import fs from 'fs'
import formidable from "formidable";
import path from "path";

export const config = {
  api: {
    bodyParser: false
  }
};

const addFiles = (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    async function createFile(auth:OAuth2Client) {

      const form = new formidable.IncomingForm({
        multiples: true,
        keepExtensions: true,
      })
      form.once("error", console.error);
      form
      .on("fileBegin",(name, file) => {
        console.log('start uploading',file.originalFilename);
      });
      form.once('end', ()=>console.log('DONE'));



      await form.parse(req, async (err,fields, files) => {
        if(err){
          throw String(JSON.stringify(err,null,2));
        }
        const p = files.file.filepath;
        console.log('moving file', files.file)
        fs.unlink(p, (a)=>console.log('done',a))
      })


      // try {
      //   fs.unlinkSync(p);
        
      // } catch (error) {
      //   console.log(error)
      // }


      // const fileMetadata = {
      //   'title': 'photo.jpg',
      // };
      // const media = {
      //   mimeType: 'image/jpeg',

      // };
      
      // const file = req
      // console.log(file);
      // await fs.writeFile('./tmp/obrazek.jpg',file,(file)=>console.log('done', file));
      // const drive = google.drive({version: 'v3', auth});
      // const file = await drive.files.create({
      //   media: media,
      //   fields: 'id',
      // })

    }

    createFile(oAuth2Client)
  }

  export default addFiles
  