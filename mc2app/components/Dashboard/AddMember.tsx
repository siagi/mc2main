import styles from '../../styles/StandardButton.module.scss'
import axios from 'axios'
import { useState } from 'react';

const AddMember = () => {
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
    const name = e.target[0].value;
    const position = e.target[1].value;
    const industry = e.target[2].value;
    const memberData = {name, position, industry};
    const formData = new FormData();
    formData.append("file",uploadFile!);
    formData.append("memberData", JSON.stringify(memberData));
    const postData = async() => {
      // const response = await fetch('/api/createFile',{
      //   method:'POST',
      //   formData
      // })

      console.log('formData',formData);
      await axios.post('/api/addMember', formData);
     

      // const result = await response.json();
      // console.log(result);
    }

    await postData();
  }

  return (
      <div>
        <form onSubmit={submit} method="post" encType="multipart/form-data">
            <label>
              Imie Nazwisko
            <input name="text1" type="text" />
            </label>
            <label>
              Stanowsiko
            <input name='text2' />
            </label>
            <label>
              Branża
              <select>
                <option value="hvac">Hvac</option>
                <option value="plumbing">Plumbing</option>
                <option value="electric">Electric</option>
                <option value="ceo">Ceo</option>
              </select>
            </label>
            <label>
              Zdjecie
            <input type="file" name='logo' onChange={handleFile}/>
            </label>
            <button type="submit">Wyslij</button>
        </form>
      </div>
  )
}

export default AddMember