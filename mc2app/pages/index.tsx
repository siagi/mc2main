import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Bim from '../components/Bim'
import ListWithLogo from '../components/ListWithLogo'
import News from '../components/News'
import Topmenu from '../components/Topmenu'
import styles from '../styles/Home.module.scss'
import YouTube from "react-youtube";
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import Projects from '../components/Projects/Projects'
import projectsdata from '../sampledata/projects'
import ImagesWithNames from '../components/ImagesWithNames'
import logo from '../public/logomc2.svg';
import Layout from '../components/Layout'
import path from 'path'
import axios from 'axios'
import Members from 'components/Members'
import ra from '../public/ra.svg'
const Home = () => {
 
  const [background,setBackground] = useState(false);
  const [showAbout,setShowAbout] = useState<boolean>(false);
  const about = useRef<HTMLDivElement>(null);
  const services = useRef(null);
  const projects = useRef(null);
  const newsList= useRef<HTMLDivElement>(null);
  const mc2Logo = useRef<HTMLDivElement>(null)

  const [news, setNews] = useState<Array<any>>();
  const [projectsList, setProjectsList] = useState<Array<any>>();
  const [membersList, setMembersList] = useState<Array<any>>();
  const [rightEdge, setRightEdge] = useState<number>();
  const [leftEdge, setLeftEdge] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [disableLeft, setDisableLeft] = useState<boolean>(false);
  const [disableRight, setDisableRight] = useState<boolean>(false);

  useEffect(()=>{
    const getProjects = async() => {
      setLoading(true);
      const res = await fetch('/api/getAllProjects');
      const data = await res.json();
      const p = data.projects.reverse();
      console.log('PP',p);
      setProjectsList(p)
      setLoading(false);
    }
    const getSomeNews = async () => {
      const res = await fetch('/api/getAllNews');
      const data = await res.json();
      const newsList = data.news.reverse();
      setNews(newsList);
    }
    const getMembers = async () => {
      const res = await fetch('/api/getAllMembers');
      const data = await res.json();
      const members = data.members.reverse();
      setMembersList(members);
    }
    getMembers();
    getSomeNews();
    getProjects();
  },[])

  useEffect(()=>{
    console.log(window.pageYOffset);
    console.log(about?.current?.scrollHeight)
    window.addEventListener('scroll',()=>{
      if(about.current){
        if(window.pageYOffset >= about?.current?.scrollHeight ) {
          setShowAbout(true);
      }
      }
    })
  },[])

  useEffect(()=>{
    if(mc2Logo.current){
      console.log(mc2Logo)
    }
    if(newsList.current){
      setRightEdge(newsList.current.scrollWidth)
    }
  },[newsList])

  const moveLeft = () => {
    if(newsList.current){
      newsList.current.scrollLeft -= newsList.current.offsetWidth
      setScrollLeft(newsList.current.scrollLeft -= newsList.current.offsetWidth);
    }
  }

  const moveRight = () => {
    if(newsList.current){
      newsList.current.scrollLeft += newsList.current.offsetWidth;
      setScrollLeft(newsList.current.scrollLeft += newsList.current.offsetWidth);
    }
    
  }


  return (
    <Layout>
      <div>
        <div className={styles.main_container}>
          <section id='home'  className={styles.container}>
            <div className={styles.box}>
              <div className={styles.set}>
                <div className={styles.header}>
                  {/* <button onClick={()=>console.log(about)}>aaa</button> */}
                  MEP
                </div>
                <div className={styles.subheader}>
                  Mechanical Electrical & Plumbing
                </div>
              </div>
                <div className={styles.group} ref={mc2Logo}>
                  <Image src={logo} width={70} height={70} className={styles.image_group} alt={'Image'}/>
                  <div className={styles.typo_group}>MC2 GROUP:</div>
                </div>
                <ImagesWithNames/>
                <Bim/>
            </div>
          </section>
        </div>
        <div className={styles.main_container}>
          <section id='news' className={styles.container}>
            <div className={styles.box_news}>
              <div className={styles.main}>
                {!loading &&
                  <div className={styles.element_news}>
                        <div className={styles.element_news_button_left}>
                          <button onClick={moveLeft}><img src='/la.svg' className={styles.icon}/></button>
                        </div>
                      <div className={styles.news} ref={newsList}>
                        <News data={news || []}/>
                      </div>
                      <div className={styles.element_news_button_right}>
                          <button  onClick={moveRight}><img src='/ra.svg' className={styles.icon}/></button>
                        </div>
                  </div>
                }
                <div className={styles.element}>
                    <div className={styles.ytContainer}>
                      <YouTube videoId='ScVBPAitibQ' className={styles.youtube}/>
                      <YouTube videoId='uXG1y2bOufo' className={styles.youtube}/>
                      <YouTube videoId='UmWWZdJR1hQ' className={styles.youtube}/>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.main_container}>
          <section ref={about} id='about' className={styles.container}>
            <div className={styles.about}>
              <div className={styles.about_1}>
                <p>
                  <h3>About Us</h3>
                  <p>From the very beginning, the quality of our projects and the optimization of selected solutions were most important to us.</p>
                  <p>We are a design studio specializing in energy efficient building. We make energy simulation and optimization of building. We design all HVAC installation and analyze thermal problems, including daylighting, thermal bridges, heat gains and heat loses.</p>
                </p>
                <p>
                  <h3>History</h3>
                  <p>Our design office started operating in 2001. Initially, these were simple projects related to the executive department. Gradually, however, we were transforming into an independent design office as a separate and independent company. The next step was the growing specialization and more advanced studies.</p>
                  <p>Currently, we can boast of a proven and experienced team of designers, very efficient work organization and numerous projects. We have carried out projects in international teams, we have experience in designing in English. We work on programs for CFD analysis, 3D thermal bridges and Revit BIM. We are involved in energy simulation and BIM design programs.</p>
                </p>
              </div>
              <div className={styles.about_2}>
                <p>
                  <h3>Design Quality</h3>
                  <p>MC2 core values have been shaped over more than 18 years of delivering the finest design services to our clients.</p>
                  <p>We focus primarily on the high quality of our projects, both in terms of technical solutions correctness and their optimization. We never go the shortest way. We always analyze solutions to offer our client the best possible and best suited to his project.</p>
                  <p>We place great emphasis on cooperation with architects and designers from another industry so as to be in constant contact and coordinate solutions on an ongoing basis.</p>
                </p>
                <p>
                  <h3>Looking into the future</h3>
                  <p>We are constantly developing, both our skills and knowledge of the latest solutions.</p>
                  <p>We are up to date with the latest technical solutions. We also develop our design skills on the latest software to provide the highest quality product possible.</p>
                </p>
              </div>
            </div>
            
          </section>
        </div>
        <div className={styles.main_container}>
          <section id='bim' className={styles.container}>
           <div>BIM</div>
          </section>
        </div>
        <div className={styles.main_container}> 
          <section ref={services} id='services' className={styles.container}>
            <div className={styles.services}>
              <div className={styles.services_1}>
                <p>
                    <h3>Design of Heating, Ventilation, and Air Conditioning Installations in 2D and BIM</h3>
                    <p>Thank to our long experiance in any kind of installations, we can design any HVAC, Sanitary Installations and Fire Protection systems you need. Now also in BIM (Autodesk Revit) environment!</p>
                    <p>We focus primarily on the high quality of our projects, both in terms of technical solutions correctness and their optimization. We never go the shortest way. We always analyze solutions to offer our client the best possible and best suited to his project.</p>
                    <p>We place great emphasis on cooperation with architects and designers from another industry so as to be in constant contact and coordinate solutions on an ongoing basis.</p>
                  </p>
                  <p>
                    <h3>Looking into the future</h3>
                    <p>We are constantly developing, both our skills and knowledge of the latest solutions.</p>
                    <p>We are up to date with the latest technical solutions. We also develop our design skills on the latest software to provide the highest quality product possible.</p>
                  </p>
              </div>
              <div className={styles.services_2}>
              <p>
                  <h3>Design of Heating, Ventilation, and Air Conditioning Installations in 2D and BIM</h3>
                  <p>Thank to our long experiance in any kind of installations, we can design any HVAC, Sanitary Installations and Fire Protection systems you need. Now also in BIM (Autodesk Revit) environment!</p>
                  <p>We focus primarily on the high quality of our projects, both in terms of technical solutions correctness and their optimization. We never go the shortest way. We always analyze solutions to offer our client the best possible and best suited to his project.</p>
                  <p>We place great emphasis on cooperation with architects and designers from another industry so as to be in constant contact and coordinate solutions on an ongoing basis.</p>
                </p>
                <p>
                  <h3>Looking into the future</h3>
                  <p>We are constantly developing, both our skills and knowledge of the latest solutions.</p>
                  <p>We are up to date with the latest technical solutions. We also develop our design skills on the latest software to provide the highest quality product possible.</p>
                </p>
              </div>
              <div className={styles.services_3}>
              <p>
                    <h3>Design of Heating, Ventilation, and Air Conditioning Installations in 2D and BIM</h3>
                    <p>Thank to our long experiance in any kind of installations, we can design any HVAC, Sanitary Installations and Fire Protection systems you need. Now also in BIM (Autodesk Revit) environment!</p>
                    <p>We focus primarily on the high quality of our projects, both in terms of technical solutions correctness and their optimization. We never go the shortest way. We always analyze solutions to offer our client the best possible and best suited to his project.</p>
                    <p>We place great emphasis on cooperation with architects and designers from another industry so as to be in constant contact and coordinate solutions on an ongoing basis.</p>
                  </p>
                  <p>
                    <h3>Looking into the future</h3>
                    <p>We are constantly developing, both our skills and knowledge of the latest solutions.</p>
                    <p>We are up to date with the latest technical solutions. We also develop our design skills on the latest software to provide the highest quality product possible.</p>
                  </p>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.main_container}>
          <section ref={projects} id='projects' className={styles.container}>
            <Projects items={projectsList || []}/>
          </section>
        </div>
        <div className={styles.main_container}>
          <section id='team' className={styles.container}>
            <div>
                <Members data={membersList || []} />
            </div>
          </section>
        </div>
        <div className={styles.main_container}>
          <section id='career' className={styles.container}>
            <div className={styles.career}>
              <div className={styles.career_1}>
                  <p>Design of Heating, Ventilation, and Air Conditioning Installations in 2D and BIM</p>
                  <p>Our design office started operating in 2001. Initially, these were simple projects related to the executive department. Gradually, however, we were transforming into an independent design office as a separate and independent company. The next step was the growing specialization and more advanced studies.</p>
              </div>
              <div className={styles.career_2}>
                <div className={styles.career_3}>
                
                </div>
                {/* <div className={styles.career_4}>
                  <div>Join our Team</div>
                  <div>We love clever things</div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
        <div className={styles.main_container}>
          <section id='contact' className={styles.container}>
            aaa
          </section>
        </div>
      </div>
    </Layout>
  )
}

// export async function getServerSideProps() {
  
//   const res = await fetch('/api/getAllNews');
//   const data = await res.json();


//   return {
//     props: {data}, // will be passed to the page component as props
//   }
// }

export default Home
