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

  const checkToken = async() => {
    const response = await axios.get('/api/hello');
    const result = response.data
    console.log(result)
  }

  const submit = async (e:any) => {
    e.preventDefault();
    console.log('E form', e)
    const title = e.target[0].value;
    const bodyText = e.target[1].value;
    const newsText = {title, bodyText};
    console.log(e.target[0].value, e.target[1].value)
    console.log('News Text', newsText);
    const formData = new FormData();
    formData.append("file",uploadFile!);
    formData.append("bodyText", JSON.stringify(newsText));
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
            <input name="text1" type="text" />
            </label>
            <label>
              Tekst
            <textarea name='text2' />
            </label>
            <label>
              Obrazek
            <input type="file" name='logo' onChange={handleFile}/>
            </label>
            <button type="submit">Wyslij</button>
        </form>
      </div>
  )
}

export default AddNews