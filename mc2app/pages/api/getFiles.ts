import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import authorize from "./authorize";
import { oAuth2Client } from "./authorize";

const getFiles = (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {

    function listFiles(auth:OAuth2Client) {
      const drive = google.drive({version: 'v3', auth});
      drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name)',
      }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const files = res?.data.files!;
        if (files.length) {
          console.log('Files:');
          files.map((file) => {
            console.log(`${file.name} (${file.id})`);
          });
        } else {
          console.log('No files found.');
        }
      });
    }

    listFiles(oAuth2Client)
  }

  export default authorize(getFiles)
  