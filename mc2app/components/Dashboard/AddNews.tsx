import styles from '../../styles/StandardButton.module.scss'
import axios from 'axios'
import { useState } from 'react';


const AddNews = () => {
  const [uploadFile, setUploadFile] = useState();
  let file: any;
  const handleFile = (e:any) => {
    file = e.target.files[0];
    setUploadFile(file);
    console.log(file);
  }
  const submit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file",uploadFile!);
    formData.append("name",'michal');
    console.log(formData)
    const postData = async() => {
      // const response = await fetch('/api/createFile',{
      //   method:'POST',
      //   formData
      // })

      console.log('formData',formData);
      await axios.post('/api/createFile', formData);
     

      // const result = await response.json();
      // console.log(result);
    }

    await postData();
  }

  return (
      <div>
        <form onSubmit={submit} method="post" encType="multipart/form-data">
            <label>
              Tytuł
            <input type="text" />
            </label>
            <label>
              Tekst
            <textarea />
            </label>
            <label>
              Obrazek
            <input type="file" name='logo' onChange={handleFile}/>
            </label>
            <input type="submit" value="Wyślij" />
        </form>
      </div>
  )
}

export default AddNews