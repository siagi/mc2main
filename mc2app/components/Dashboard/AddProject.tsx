import styles from '../../styles/StandardButton.module.scss'
import axios from 'axios'
import { useState } from 'react';

const AddProject = () => {
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
    const description = e.target[1].value;
    const buildingType = e.target[2].value;
    const localization = e.target[3].value;
    const architect = e.target[4].value;
    const surface = e.target[5].value;
    const projectStage = e.target[6].value;
    const years = e.target[7].value;
    const buildingStatus = e.target[8].value;
    const projectScope = e.target[9].value;
    const date = new Date(Date.now());

    const projectBody = {name, description, buildingType, localization, architect, surface,projectStage, years, buildingStatus, projectScope, date};

    const formData = new FormData();
    formData.append("file",uploadFile!);
    formData.append("projectBody", JSON.stringify(projectBody));
    const postData = async() => {
      // const response = await fetch('/api/createFile',{
      //   method:'POST',
      //   formData
      // })
      await axios.post('/api/addProject', formData);
     

      // const result = await response.json();
      // console.log(result);
    }

    await postData();
  }

  return (
      <div>
        <form onSubmit={submit} method="post" encType="multipart/form-data">
            <label>
              Nazwa
            <input name="text1" type="text" />
            </label>
            <label>
              Opis
            <textarea name='text2' />
            </label>
            <label>
              Typ budynku
            <textarea name='text2' />
            </label>
            <label>
              Lokalizacja
            <input name='text2' />
            </label>
            <label>
              Architekt
            <input name='text2' />
            </label>
            <label>
              Powierzchnia
            <input name='text2' />
            </label>
            <label>
              Zakres projektu
            <input name='text2' />
            </label>
            <label>
              Okres 
            <input name='text2' />
            </label>
            <label>
              Etap budowy
            <input name='text2' />
            </label>
            <label>
              Wykonywane prace
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

export default AddProject