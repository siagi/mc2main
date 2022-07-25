import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import authorize, { oAuth2Client } from "./authorize";
import fs from 'fs'
import formidable, { File } from "formidable";
import path from "path";
import { globalToken } from "./hello";
import { MongoClient } from "mongodb";

const MONGODB_URI:string ="mongodb+srv://michal:michal@cluster0.izabq.mongodb.net/?retryWrites=true&w=majority";

export const config = {
  api: {
    bodyParser: false
  }
};

const addProject = (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    async function ap(auth:OAuth2Client) {
      // console.log('reeqqq',req)
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



      form.parse(req, async (err,fields, files) => {
        if(err){
          throw String(JSON.stringify(err,null,2));
        }
        console.log('FIELDS', fields)
        console.log('File',files)
        const formFields = JSON.parse(fields.projectBody as string)
        console.log('FORM FIELDS', formFields)
        const p = (files.file as File).filepath;
        console.log('PATH',p);
        const drive = google.drive({version: 'v3', auth});
        const media = {
          mimeType: 'image/jpeg',
          body: fs.createReadStream(p),
          name:'aaa',
        };

        try {
          const file = await drive.files.create(
            {
              fields:'id',
              media:media,

            }
          );
          console.log('File Id:', file.data.id);
          await drive.permissions.create({
            fileId: file.data.id,
            requestBody: {
              role: "reader",
              type: "anyone",
            },
          });
          await drive.files.get({
            fileId: file.data.id,
            fields: "webViewLink, webContentLink",
          });

          // console.log('RESULT',result)
          console.log('ID?',file.data.id)
          const link = `https://drive.google.com/uc?id=${file.data.id}`;
          const db = new MongoClient(MONGODB_URI);
          await db.connect();
          console.log('Connected to Mongo Database');
          const collectionNews = db.db('mc2main').collection('projects');

          const newNews = {
            name: formFields.name,
            description:formFields.description,
            buildingType:formFields.buildingType,
            localization : formFields.localization,
            architect : formFields.architect,
            surface : formFields.surface,
            projectStage : formFields.projectStage,
            years : formFields.years,
            buildingStatus : formFields.buildingStatus,
            projectScope : formFields.projectScope.split(','),
            date : new Date(Date.now()),
            picture: link,
        }

        const addedNews = await collectionNews.insertOne(newNews);
        console.log('Added news',addedNews);
        const findNews = await collectionNews.findOne({_id:addedNews.insertedId});
        db.close();
        console.log('find News',findNews);
          
        } catch (error) {
          console.log('ERROR',error);
        }
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

    ap(oAuth2Client)
  }



  export default authorize(addProject)
  