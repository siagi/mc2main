import { FunctionComponent, LegacyRef, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import logo from '../public/logomc2.svg'
import sampledata from '../../sampledata/news.js'
import photo1 from '../public/photos/photo1.jpg'
import styles from '../../styles/Projects.module.scss'
import calendar from '../public/calendaricon.svg'
import projects from '../../sampledata/projects'
import { Project } from '../../types/types'
import { useRouter } from 'next/router'
import Popup from '../Popup'

// import styles from '../styles/Topmenu.module.scss'



const SingleProject = ({item, data}:{item:Project, data:any[]}) => {
  const [showModal,setShowModal] = useState<boolean>(false);
  const widthElement:LegacyRef<HTMLDivElement> = useRef(null);
  const [newWidth, setNewWidth] = useState<number>();
  const setWidth = () => {
    if(widthElement.current)setNewWidth(widthElement.current.offsetWidth)
  }
  useEffect(()=>{
    setWidth();
    window.addEventListener('resize',setWidth)
  },[widthElement])
  useEffect(()=>{
    if(showModal){
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    }else{
      document.body.style.overflow = 'unset'
      document.body.style.position = '';
    }
  },[showModal])

  const router = useRouter();

  return (
      <div className={styles.main}>
          <div className={styles.headline} ref={widthElement}>
            <div className={styles.title}>{item.name}</div>
            <span>
              <button className={styles.button_more} onClick={()=> setShowModal(true)}>See details</button>
            </span>
            {showModal && 
              <Popup id={item._id} close={setShowModal} data={data}/>
            }
          </div>
          <div className={styles.image}><img src={item.picture} alt={'image'} width={newWidth} className={styles.image}/></div>
          <div>{item.description.length > 100 ? item.description.substring(0,100)+'...':item.description}</div>
      </div>
  )
}

export default SingleProject