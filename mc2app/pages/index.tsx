import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Bim from '../components/Bim'
import ListWithLogo from '../components/ListWithLogo'
import News from '../components/News'
import Topmenu from '../components/Topmenu'
import styles from '../styles/Home.module.scss'
import YouTube from "react-youtube";
import { useRef, useState } from 'react'

const Home: NextPage = () => {
 const [background,setBackground] = useState(false);

  return (
    <div>
      <section id='news' className={styles.container}>
        <div className={styles.box}>
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
              <div className={styles.news}>
                <News/>
              </div>
            </div>
            <div className={styles.element}>
                <div>
                  <YouTube videoId='ScVBPAitibQ' className={styles.youtube}/>
                </div>
                <Bim/>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className={styles.container}>
        <div className={styles.box}>
          <div className={styles.main}>
            {/* <div className={styles.title}>About</div> */}
            ABOUTasdadasdasd
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
