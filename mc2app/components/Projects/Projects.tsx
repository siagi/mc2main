import { FunctionComponent } from 'react'
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


  return (
      <div className={styles.list}>
        {items && items.map(item=>{
          return <SingleProject item={item} key={item._id}/>
        })}
      </div>
  )
}

export default Projects