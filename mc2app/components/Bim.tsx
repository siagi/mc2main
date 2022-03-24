import { FunctionComponent } from 'react'
import styles from '../styles/Bim.module.scss'


const Bim:FunctionComponent = () => {
  return (
      <div className={styles.container}>
          <div>
            <span style={{fontWeight:700, color:'white',fontSize:'5rem'}}>BIM</span>
            <span style={{fontWeight:700, color:'#BDFF00',fontSize:'3rem'}}>REVIT</span>
          </div>
          <div style={{fontSize:'1.5rem',paddingBottom:'1rem'}}>
              <span style={{color:'#BDFF00'}}>Cooperation & </span>
              <span style={{color:'white'}}>Oursourcing</span>
          </div>
         <div style={{color:'white'}}>
         From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.
         </div>
            
      </div>
  )
}

export default Bim