import { FunctionComponent } from 'react'
import styles from '../styles/Topmenu.module.scss'
import logo from '../public/logomc2.svg'
import Image from 'next/image'
import axios from 'axios'


const Topmenu:FunctionComponent = () => {


  const getLogin = async () => {
    const response = await fetch('/api/login',{body:JSON.stringify({data:'login'}), method:'POST', headers: {
      'Content-Type': 'application/json'
 },});
    const result = await response.json() as {url:string};
    if(result){
      window.open(result.url,'_blank');
    }
  }

  const getData = async() => {
    const response =  await axios.post('/api/addMember');
    const result = await response.data
    if(result){
      window.open(result.url,'_blank');
    }
  }

  return (
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <a href="#news" className={styles.element}>News</a>
          <a href="#about" className={styles.element}>About</a>
          <a href="#bim" className={styles.element}>BIM</a>
          <a href="#services" className={styles.element}>Services</a>
          <a href="#projects" className={styles.element}>Projects</a>
          <a href="#team" className={styles.element}>Team</a>
          <a href="#career" className={styles.element}>Career</a>
          <a href="#contact" className={styles.element}>Contact</a>  
        </div>
        {/* <button onClick={getLogin}>Login</button> */}
        <button className={styles.button_login} onClick={getData}>Login</button>
      </div>
  )
}

export default Topmenu