import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from 'react'
import styles from '../styles/ImagesWithNames.module.scss'
import StandardButton from './Buttons/StandardButton'
import Image from 'next/image'
import logo from '../public/logomc2.svg'


const ImagesWithNames:FunctionComponent = () => {
    const container = useRef<HTMLDivElement>(null);
    const [active,setActive] = useState<string>('container');
    const [off,setOff] = useState<string>('container_off')

    const map = {
        'container':styles.container_off,
        'project':styles.container_projects_off,
        'invest':styles.container_invest_off,
        'engineer':styles.container_engineer_off,
        'service':styles.container_service_off
    }

    const setStyle = (img:string) =>{
        if(container.current && container.current.children !== null){
            const items = Array.from(container.current.children) as HTMLDivElement[]
            items.forEach((item,index)=>{
                 const xMove = 15*index;
                 item.style.background = img;
                 item.style.backgroundSize = "cover";
                 item.style.width = '17.5vw'
                 item.style.backgroundPosition = `-${xMove}vw`;
             })
        }
    }

    const startImage = "url('/photos/main2.jpg')"

    useEffect(()=>{
        document.addEventListener('mousemove',(e)=>{
            if((e.target as Element).id !== 'main_container' && (e.target as Element).id !== 'container')setStyle(startImage);
        })
        if(container){
            setStyle(startImage);
        }
    },[])


  return (
      <div className={styles.main}>
        <div id='main_container' ref={container} className={styles.container}>
            <div id='container' onMouseOver={()=>setStyle("url('/photos/main.jpg')")}  className={styles.container_first}><div id='container' className={styles.label}>Projects</div></div>
            <div id='container' onMouseOver={()=>setStyle("url('/photos/investment.jpg')")}  className={styles.container_second}><div id='container' className={styles.label}>Investment</div></div>
            <div id='container' onMouseOver={()=>setStyle("url('/photos/engineer.jpg')")}  className={styles.container_third}><div id='container' className={styles.label}>Engineer</div></div>
            <div id='container' onMouseOver={()=>setStyle("url('/photos/service.jpg')")}  className={styles.container_fourth}><div id='container' className={styles.label}>Service</div></div>
        </div>
      {/* <div ref={container}  className={styles.container}>
            <div id='project' onMouseOver={(e)=>{
                if(e.target.id !== active){
                    container.current.className = map[active];
                    setActive('project')
                    setTimeout(()=>{
                        container.current.className = styles.container_projects
                    },500)
                }
                }}>a</div>
            <div id='invest' onMouseOver={(e)=>{
                if(e.target.id !== active){
                    container.current.className = map[active];
                    setActive('invest')
                    setTimeout(()=>{
                        container.current.className = styles.container_invest
                        },500)
                }
                }}>b</div>
            <div id='engineer' onMouseOver={(e)=>{
                if(e.target.id !== active){
                    container.current.className = map[active];
                    setActive('engineer')
                    setTimeout(()=>{
                        container.current.className = styles.container_engineer
                    },500)
                }
                }} className={styles.container_75}>c</div>
            <div id='service' onMouseOver={(e)=>{
                if(e.target.id !== active){
                    container.current.className = map[active];
                    setActive('service')
                    setTimeout(()=>{
                        container.current.className = styles.container_service
                    },500)
                }
                }}className={styles.container_100}>d</div>
      </div> */}
      </div>
  )
}

export default ImagesWithNames