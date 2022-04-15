import { FunctionComponent } from 'react'
import Image from 'next/image'
import logo from '../public/logomc2.svg'
import sampledata from '../../sampledata/news.js'
import photo1 from '../public/photos/photo1.jpg'
import styles from '../../styles/Projects.module.scss'
import calendar from '../public/calendaricon.svg'
import projects from '../../sampledata/projects'
import { Project } from '../../types/types'
import { useRouter } from 'next/router'

// import styles from '../styles/Topmenu.module.scss'



const SingleProject = ({item}:{item:Project}) => {

  const router = useRouter();

  return (
      <div className={styles.main}>
          <div className={styles.headline}>
            <span>{item.name}</span>
            <button onClick={()=> router.push(`/projects/${item._id}`)}>More</button>
          </div>
          <div className={styles.image}><Image src={item.picture} width={350} height={220} className={styles.image}/></div>
          <div>{item.description}</div>
      </div>
  )
}

export default SingleProject