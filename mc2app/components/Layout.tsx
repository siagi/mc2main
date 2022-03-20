import type { NextComponentType, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Children, FunctionComponent, ReactNode } from 'react'
import Topmenu from './Topmenu'
import styles from '../styles/Layout.module.scss'
import fbicon from '../public/icons8-facebook.svg'
import insticon from '../public/icons8-instagram.svg'
import linkedicon from '../public/icons8-linkedin.svg'



const Layout:FunctionComponent<{children:JSX.Element}> = ({children}) => {
  return (
    <div>
        <Head>
                <title>MC2</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
        </Head>
        <div  className={styles.menu}>
            <Topmenu/>
        </div>
        <div>
            {children}
        </div>
        <footer className={styles.footer}>
          <div className={styles.social}>
            <Image src={fbicon} width={24} height={24}/>
            <Image src={insticon} width={24} height={24}/>
            <Image src={linkedicon} width={24} height={24}/>
          </div>
a
        </footer>
 
  </div>
  )
}

export default Layout