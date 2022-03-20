import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ListWithLogo from '../components/ListWithLogo'
import News from '../components/News'
import Topmenu from '../components/Topmenu'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <div className={styles.main}>
       <div className={styles.element}>
         <div className={styles.set}>
          <div className={styles.header}>
            MEP
          </div>
          <div className={styles.subheader}>
            Mechanical Electrical & Plumbing
          </div>
         </div>
         <div>
           <ListWithLogo/>
         </div>
       </div>
       <div className={styles.element}>
        <News/>
       </div>
     </div>
    </div>
  )
}

export default Home
