/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { FunctionComponent, LegacyRef, useEffect, useRef, useState } from 'react'
import styles from '../styles/Popup.module.scss'
import { Children, Project } from '../types/types'
import projectsdata from '../sampledata/projects'
import Image from 'next/image'


const Popup = ({id, data,close}:{id:string, data:any[],close:(arg:boolean)=>void}) => {

    const [detailedProject, setDetailedProject] = useState<Project>();
    const widthElement:LegacyRef<HTMLDivElement> = useRef(null)
    const [nWidth, setNWidth] = useState<number>();
    // const [nHeight, setNHeight] = useState<number>();

    const setWidth = () => {
        if(widthElement.current)setNWidth(widthElement.current.offsetWidth);
    }


    useEffect(()=>{
        window.addEventListener('resize',setWidth)
        setWidth();
        setDetailedProject(data.find(item=> item._id === id))
    },[widthElement])


  return (
      <div className={styles.container}>
          <div className={styles.project_information} ref={widthElement}>
              {detailedProject && 
                <div className={styles.project_details}>
                    <div className={styles.image_container}>
                        <img src={detailedProject.picture} width={nWidth!*0.6} className={styles.project_image} placeholder='blur' />
                        <div className={styles.map_container}>
                            <iframe
                                className={styles.iframe_container}
                                width={nWidth!*0.6}
                                height="300"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC--QeOdat_eQKyPVYs5y5D5sX-eRC0BEA&q=${detailedProject.localization}`}>
                                </iframe>
                        </div>
                    </div>
                    <div className={styles.information_container}>
                        <div className={styles.information_field}><div className={styles.information_label}>Name: </div>{detailedProject.name}</div>
                        <div className={styles.information_field}><div className={styles.information_label}>Description: </div>{detailedProject.description}</div>
                        <div className={styles.information_field}><div className={styles.information_label}>Type: </div>{detailedProject.buildingType}</div>
                        <div className={styles.information_field}><div className={styles.information_label}>Architect: </div>{detailedProject.architect}</div>
                        <div className={styles.information_field}><div className={styles.information_label}>Surface: </div>{detailedProject.surface} <span>&#13217;</span></div>
                        <div className={styles.information_field}><div className={styles.information_label}>Project stage: </div>{detailedProject.projectStage}</div>
                        <div className={styles.information_field}><div className={styles.information_label}>Years: </div>{detailedProject.years}</div>
                        <div className={styles.information_field}><div className={styles.information_label}>Status: </div>{detailedProject.buildingStatus}</div>
                        <div className={styles.information_field}><div className={styles.information_label}>Project scope: </div><ul>{detailedProject.projectScope.map((item,index)=>{
                            return(
                                <li key={index}>{item}</li>
                            )
                        })}</ul></div>
                        
                        <button className={styles.button_close} onClick={()=>close(false)}>Back to projects</button>
                    </div>
                </div>
              }
          </div>
      </div>
  )
}

export default Popup