import { FunctionComponent, useRef } from 'react'
import Image from 'next/image'
import logo from '../public/logomc2.svg'
import sampledata from '../../sampledata/news.js'
import photo1 from '../public/photos/photo1.jpg'
import styles from '../../styles/Projects.module.scss'
import calendar from '../public/calendaricon.svg'
import projects from '../../sampledata/projects'
import { Project } from '../../types/types'
import SingleProject from './SingleProject'

// import styles from '../styles/Topmenu.module.scss'



const Projects = ({items}:{items:Project[]}) => {

  const projectsList = useRef<HTMLDivElement>(null)
  const moveLeft = () => {
    if(projectsList.current){
      projectsList.current.scrollLeft -= window.innerWidth
    //   setScrollLeft(newsList.current.scrollLeft -= newsList.current.offsetWidth);
    }
  }
  const moveRight = () => {
  if(projectsList.current){
    projectsList.current.scrollLeft += window.innerWidth
  //   setScrollLeft(newsList.current.scrollLeft -= newsList.current.offsetWidth);
  }
  }

  return (
    <div className={styles.main3}>
        <button className={[styles.button, styles.button_border_right].join(" ")} onClick={moveLeft}><img src="/la.svg" className={styles.icon}/></button>
          <div className={styles.list} ref={projectsList}>
            <div className={styles.container}>
              {items && items.map(item=>{
                return (
                      <SingleProject item={item} key={item._id} data={items}/>
                )
              })}
            </div>
          </div>
        <button className={[styles.button, styles.button_border_left].join(" ")} onClick={moveRight}><img src="/ra.svg" className={styles.icon}/></button>
    </div>
  )
}

export default Projects