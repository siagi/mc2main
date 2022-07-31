import { FunctionComponent } from 'react'
import styles from '../styles/Bim.module.scss'
import StandardButton from './Buttons/StandardButton'


const Bim:FunctionComponent = () => {
  return (
    <div className={styles.main}>
          <div className={styles.container_first}>
              <div className={styles.left_typo} >BIM <span className={styles.right_typo}>REVIT</span></div>
              <div className={styles.small_typo}>
                  <span style={{color:'#BDFF00'}}>check for Cooperation & </span>
                  <span style={{color:'white'}}>Oursourcing</span>
              </div>
            <div className={styles.text}>
            From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.
            </div>
            <div className={styles.buttons_container}>
              <StandardButton text='Learn more and get started' type='outline'/>
              {/* <StandardButton text='Learn more' type='solid'/> */}
            </div>
      </div>


      <div className={styles.container_second}>
          <div className={styles.left_typo}>Career <span className={styles.right_typo}>REVIT</span></div>
          <div className={styles.small_typo}>
              <span style={{color:'#BDFF00'}}>check for Cooperation & </span>
              <span style={{color:'white'}}>Oursourcing</span>
          </div>
         <div className={styles.text}>
         We will traing to be great BIM specialist. In addition after trainign you will get the job in one of foreign markets like Aldi Billa or other...
         </div>
         <div className={styles.buttons_container}>
           <StandardButton text='Learn more and get started' type='outline'/>
           {/* <StandardButton text='Learn more' type='solid'/> */}
         </div>
      </div>
    </div>
  )
}

export default Bim