import { FunctionComponent } from 'react'
import Image from 'next/image'
import logo from '../public/logomc2.svg'
import styles from '../styles/ListWithLogo.module.scss'

// import styles from '../styles/Topmenu.module.scss'


const ListWithLogo = () => {
  return (
      <div className={styles.container}>
          <div className={styles.smallContainer}>
                  <div>
                    <Image src={logo} width={68} height={68} className={styles.image}/>
                  </div>
                  <div className={styles.companyName}>
                    <span>PROJEKTY</span>
                  </div>
          </div>

          <div className={styles.smallContainer}>
                  <div>
                    <Image src={logo} width={68} height={68} className={styles.image}/>
                  </div>
                  <div className={styles.companyName}>
                    <span>INWESTYCJE</span>
                  </div>
          </div>

          <div className={styles.smallContainer}>
                  <div>
                    <Image src={logo} width={68} height={68} className={styles.image}/>
                  </div>
                  <div className={styles.companyName}>
                    <span>INŻYNIERIA</span>
                  </div>
          </div>

          <div className={styles.smallContainer}>
                  <div>
                    <Image src={logo} width={68} height={68} className={styles.image}/>
                  </div>
                  <div className={styles.companyName}>
                    <span>SERWIS</span>
                  </div>
          </div>
      </div>
  )
}

export default ListWithLogo