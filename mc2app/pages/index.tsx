import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Bim from '../components/Bim'
import ListWithLogo from '../components/ListWithLogo'
import News from '../components/News'
import Topmenu from '../components/Topmenu'
import styles from '../styles/Home.module.scss'
import YouTube from "react-youtube";
import { useEffect, useRef, useState } from 'react'

const Home: NextPage = () => {

  const [background,setBackground] = useState(false);
  const [showAbout,setShowAbout] = useState<boolean>(false);
  const about = useRef(null);
  const services = useRef(null);
  const projects = useRef(null);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.pageYOffset === about.current.scrollHeight ) {
        setShowAbout(true);
      }
    })
  })

  return (
    <div>
      <section id='news' className={styles.container}>
        <div className={styles.box}>
          <div className={styles.main}>
            <div className={styles.element}>
              <div className={styles.set}>
                <div className={styles.header}>
                  {/* <button onClick={()=>console.log(about)}>aaa</button> */}
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
      <section ref={about} id='about' className={styles.container}>
        {showAbout && 
          <div className={styles.box}>
            <div className={styles.main}>
              {/* <div className={styles.title}>About</div> */}
              <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Tailus blocks leadership</h2>
                        <p className="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
                    </div>
                    <div className="grid gap-12 items-center md:grid-cols-3">
                        <div className="space-y-4 text-center">
                            {/* <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                                src={"https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZCUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="woman" loading="lazy" width="640" height="805"/> */}
                            <div>
                                <h4 className="text-2xl">Hentoni Doe</h4>
                                <span className="block text-sm text-gray-500">CEO-Founder</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            {/* <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                                    alt="man" loading="lazy" width="1000" height="667" src={'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZCUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80'}/> */}
                            <div>
                                <h4 className="text-2xl">Jonathan Doe</h4>
                                <span className="block text-sm text-gray-500">Chief Technical Officer</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            {/* <Image className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                      alt="woman" loading="lazy" width="1000" height="667" src={'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZCUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80'}/> */}
                            <div>
                                <h4 className="text-2xl">Anabelle Doe</h4>
                                <span className="block text-sm text-gray-500">Chief Operations Officer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        }
      </section>
      <section ref={services} id='services' className={styles.container}>
        Services
      </section>
      <section ref={projects} id='projects' className={styles.container}>
        projects
      </section>
      <section id='career' className={styles.container}>
        career
      </section>
      <section id='contact' className={styles.container}>
        contact
      </section>
    </div>
  )
}

export default Home
