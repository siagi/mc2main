import { FunctionComponent } from 'react'
import Image from 'next/image'
import logo from '../public/logomc2.svg'
import sampledata from '../sampledata/news.js'
import photo1 from '../public/photos/photo1.jpg'
import styles from '../styles/News.module.scss'
import calendar from '../public/calendaricon.svg'

// import styles from '../styles/Topmenu.module.scss'



const News = () => {
  return (
      <div className={styles.list}>
          {sampledata && sampledata.map((item,index)=>{
              return(
                    <div key={index} style={{width:'50%'}}>
                        <div>
                            {item.photo && 
                                <Image src={item.photo as string} layout={'intrinsic'} width={item.width} height={item.height} className={styles.image}/>
                            }
                        </div>
                        <div className={styles.dataAndTitle}>
                        
                            <div className={styles.data}>
                                <span><Image src={calendar} height={18} width={18}/></span>
                                <span>{item.data}</span>
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