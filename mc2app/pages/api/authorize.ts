// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {google} from 'googleapis'
import readline from 'readline'
import fs from 'fs'
import path from 'path'
import { OAuth2Client } from 'google-auth-library'
import handler from './googleauthcallback'


export let globalToken:any
const TOKEN_PATH = path.join('token.json');
const SCOPES = ['https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.file']
const url = path.join('credentials.json')

const credentails = {web:{client_id:"451995777662-63ooquudlpvta9ot6qofia0ff1eru9ad.apps.googleusercontent.com",project_id:"mc2app-348321",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_secret:"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",redirect_uris:["http://localhost:3000/api/googleauthcallback"]}}
const {client_secret, client_id, redirect_uris} = credentails.web

export let oAuth2Client = new google.auth.OAuth2(
  client_id, client_secret, redirect_uris[0]);
type Data = {
  name: string
}

const authorize = (handler:any) => {
  return (req: NextApiRequest,res:NextApiResponse) => {

    //check request body
    const request = req.body as {data:string};
    const data = request.data;
  
    function authorize(credentials: { web: { client_secret: string; client_id: string; redirect_uris: string[], project_id: string, auth_uri: string, token_uri: string, auth_provider_x509_cert_url: string  } }, callback: { (auth: any): void; (arg0: OAuth2Client): void }) {
  
      const now = Date.now();
      console.log('global token',globalToken)
      console.log(now);
      console.log(now<globalToken?.expiry_date)
        if (!globalToken || (globalToken && globalToken.expiry_date < now)) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(globalToken);
        handler();
        // callback(oAuth2Client);
    }
    
    function getAccessToken(oAuth2Client: OAuth2Client, callback: (arg0: any) => void) {
      console.log('here3')
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
      });
        console.log('Authorize this app by visiting this url:', authUrl);
        res.status(200).json({url:authUrl});
      }
  
  
    
     

        console.log('here2')
        authorize(credentails, ()=>console.log('login...'));
      //load credentials from file
  
  
    // Load client secrets from a local file.
  
  
  
  
  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  
  
  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   */
  
  
  
  /**
   * Lists the names and IDs of up to 10 files.
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
  
  
  //  function listFiles(auth:OAuth2Client):void|boolean {
  //   try {
  //     const drive = google.drive({version: 'v3', auth});
  //     drive.files.list({
  //       pageSize: 10,
  //       fields: 'nextPageToken, files(id, name)',
  //     }, (err, res) => {
  //       if (err) return console.log('The API returned an error: ' + err);
  //       const files = res?.data.files!;
  //       if (files.length) {
  //         console.log('Files:');
  //         files.map((file) => {
  //           console.log(`${file.name} (${file.id})`);
  //         });
  //       } else {
  //         console.log('No files found.');
  //       }
  //     });
      
  //   } catch (error) {
  
  //     console.log(error)
      
  //   }
  // }
  }
}

export const logWithCode = (code:any, callback:()=>void) => {
  if(oAuth2Client){
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      if(token){
        oAuth2Client.setCredentials(token);
        globalToken = token
      }
      // Store the token to disk for later program executions
     console.log(globalToken)
     if(globalToken){
       () => console.log('global token',globalToken)
     }
      callback();
    });
  }
}
export default authorize