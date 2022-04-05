import { FunctionComponent } from 'react'
import styles from '../styles/Topmenu.module.scss'


const Topmenu:FunctionComponent = () => {
  return (
      <div className={styles.container}>
          <a href="#news" className={styles.element}>News</a>
          <a href="#about" className={styles.element}>About</a>
          <div className={styles.element}>Services</div>
          <div className={styles.element}>Projects</div>
          <div className={styles.element}>Career</div>
          <div className={styles.element}>Contact</div>
            
      </div>
  )
}

export default Topmenu