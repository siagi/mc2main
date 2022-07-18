import { FunctionComponent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import logo from '../public/logomc2.svg'
import sampledata from '../sampledata/news.js'
import photo1 from '../public/photos/photo1.jpg'
import styles from '../styles/News.module.scss'
import calendar from '../public/calendaricon.svg'

// import styles from '../styles/Topmenu.module.scss'



const News = ({data}:{data:any[]}) => {
    console.log('here33')
    console.log('Data33',data)
    const [elWidth, setElWidth] = useState<number>();
    const el = useRef(null);
    const handleResize = () => {
        if(el.current){
            setElWidth((el.current as HTMLElement).offsetWidth)
        }
    }
    useEffect(()=>{
        handleResize();
        window.addEventListener('resize', handleResize)

    },[el])
    return (
      <div className={styles.list} ref={el} >
          {data && data.map((item,index)=>{
              return(
                    <div key={index} className={styles.newscontainer}>
                        <div>
                            {item.photo && 
                                // <Image src={item.photo as string} objectFit={'contain'} width={600} height={600/(16/9)} className={styles.image} alt='image'/>
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={item.photo} width={elWidth} className={styles.image} alt={item.name}/>
                            }
                        </div>
                        <div className={styles.dataAndTitle}>
                        
                            <div className={styles.data}>
                                <span><Image src={calendar} height={16} width={16} alt='iconCalendar'/></span>
                                <span>{item.date}</span>
                            </div>
                            <div className={styles.descriptionTitle}>
                                {item.name}
                            </div>
                        
                        </div>
                        <div className={styles.description}>
                            {item.description}
                            
                        </div>
                        <hr/>
                    </div>
                    
              )
          })}

      </div>
  )
}

export default News