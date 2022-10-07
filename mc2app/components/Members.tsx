/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react'
import styles from '../styles/Members.module.scss'

const positionColors:any = {
    ceo:"#94989b",
    hvac:"#008860",
    plumbing:"#7e4a3f",
    electric:"#e7342d",
    office:"#017ebe"
}

const sortTest = (data:any[]) => {
   data.map((item)=>{
    switch (item.industry) {
        case 'ceo':
            return item.sort = 0
        case 'hvac':
            return item.sort = 1
        case 'plumbing':
            return item.sort = 2
        case 'electric':
            return item.sort = 3
        case 'office':
            return item.sort = 4
        default:
            break;
        }
   })
}


const Members = ({data}:{data:any}) => {
    const memberListElement = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        sortTest(data)
        console.log('DATA',data)
    },[data])

    const moveLeft = () => {
        if(memberListElement.current){
            memberListElement.current.scrollLeft -= window.innerWidth
        //   setScrollLeft(newsList.current.scrollLeft -= newsList.current.offsetWidth);
        }
      }
    const moveRight = () => {
    if(memberListElement.current){
        memberListElement.current.scrollLeft += window.innerWidth
    //   setScrollLeft(newsList.current.scrollLeft -= newsList.current.offsetWidth);
    }
    }

  return (
        <div className={styles.main3}>
            <button className={[styles.button, styles.button_border_right].join(" ")} onClick={moveLeft}><img src="/la.svg" className={styles.icon}/></button>
            <div className={styles.main} ref={memberListElement}>
                <div className={styles.container}>
                    {data && data.sort((a:any,b:any)=> a.sort - b.sort).map((item:any)=>{
                        return(
                            <div key={item._id} className={styles.profile}>
                                <div>
                                    <img src={item.picture} alt={item.name} className={styles.picture} style={{border:`solid 4px ${positionColors[item.industry]}`}}/>
                                </div>
                                <div>
                                    {item.name}
                                </div>
                                <hr className={styles.hr}/>
                                <div>
                                    {item.position}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button className={[styles.button, styles.button_border_left].join(" ")} onClick={moveRight}><img src="/ra.svg" className={styles.icon}/></button>
        </div>
  )
}

export default Members