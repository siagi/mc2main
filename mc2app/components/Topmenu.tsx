import { FunctionComponent } from 'react'
import styles from '../styles/Topmenu.module.scss'


const Topmenu:FunctionComponent = () => {
  return (
      <div className={styles.container}>
          <a href="#news" className={styles.element}>News</a>
          <a href="#about" className={styles.element}>About</a>
          <a href="#services" className={styles.element}>Services</a>
          <a href="#projects" className={styles.element}>Projects</a>
          <a href="#career" className={styles.element}>Career</a>
          <a href="#contact" className={styles.element}>Contact</a>  
      </div>
  )
}

export default Topmenu