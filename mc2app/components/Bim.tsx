import { FunctionComponent } from 'react'
import styles from '../styles/Bim.module.scss'
import StandardButton from './Buttons/StandardButton'


const Bim:FunctionComponent = () => {
  return (
      <div className={styles.container}>
          {/* <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{fontWeight:700, color:'white',fontSize:'5rem'}}>BIM</div>
            <div style={{fontWeight:700, color:'#BDFF00',fontSize:'3rem'}}>REVIT</div>
          </div> */}
          <div style={{fontWeight:700, color:'white',fontSize:'5rem', lineHeight:'3rem'}}>BIM <span style={{fontWeight:700, color:'#BDFF00',fontSize:'3rem'}}>REVIT</span></div>
          <div style={{fontSize:'1.5rem',paddingBottom:'1rem'}}>
              <span style={{color:'#BDFF00'}}>Cooperation & </span>
              <span style={{color:'white'}}>Oursourcing</span>
          </div>
         <div style={{color:'white'}}>
         From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.
         </div>
         <div className={styles.buttons_container}>
           <StandardButton text='Get started' type='outline'/>
           <StandardButton text='Learn more' type='solid'/>
         </div>
            
      </div>
  )
}

export default Bim