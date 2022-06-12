import { FunctionComponent } from 'react'
import styles from '../styles/Topmenu.module.scss'
import logo from '../public/logomc2.svg'
import Image from 'next/image'


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
    const response = await fetch('/api/getFiles', {body:JSON.stringify({data:'getData'}), method:'POST',headers: {
      'Content-Type': 'application/json'
 }})
 const result = await response.json() as {url:string};
    if(result){
      window.open(result.url,'_blank');
    }
  }

  return (
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <a href="#news" className={styles.element}>News</a>
          <a href="#about" className={styles.element}>About</a>
          <a href="#services" className={styles.element}>Services</a>
          <a href="#projects" className={styles.element}>Projects</a>
          <a href="#career" className={styles.element}>Career</a>
          <a href="#contact" className={styles.element}>Contact</a>  
        </div>
        <button onClick={getLogin}>Login</button>
        <button onClick={getData}>Get data</button>
      </div>
  )
}

export default Topmenu