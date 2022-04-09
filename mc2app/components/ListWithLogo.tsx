import { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import logo from '../public/logomc2.svg'
import styles from '../styles/ListWithLogo.module.scss'
import Modal from './Modal'

// import styles from '../styles/Topmenu.module.scss'




const ListWithLogo = () => {
  const [showdesc,setShowdesc] = useState<boolean>(false);
  const [text, setText] = useState<string>('')
  return (
      <div className={styles.container}>
        {showdesc && 
          <Modal text={text}/>
        }
          <div className={styles.smallContainer} >
                <div className={styles.group} 
                onMouseOver={()=>{
                  setShowdesc(true)
                  setText('Our design office started operating in 2001. Initially, these were simple projects related to the executive department. Gradually, however, we were transforming into an independent design office as a separate and independent company. The next step was the growing specialization and more advanced studies.')
                  }} onMouseLeave={()=>{
                    setShowdesc(false)
                    setText('')
                    }}
                >
                  <div>
                    <Image src={logo} width={68} height={68} className={styles.image}/>
                  </div>
                  <div className={styles.companyName}>
                    <span>PROJEKTY</span>
                  </div>
                </div>
          </div>

          <div className={styles.smallContainer}>
            <div className={styles.group}
            onMouseOver={()=>{
              setShowdesc(true)
              setText('Making a building model, we can check virtually all parameters that the user will be able to check in the future only in practice in an existing building. Thanks to our analyzes, investors can check virtually how it will be in a real building and thus avoid many costly mistakes, as well as introduce such changes')
              }} onMouseLeave={()=>{
                setShowdesc(false)
                setText('')
                }}
            
            >
                  <div>
                    <Image src={logo} width={68} height={68} className={styles.image}/>
                  </div>
                  <div className={styles.companyName}>
                    <span>INWESTYCJE</span>
                  </div>
            </div>
          </div>

          <div className={styles.smallContainer}>
            <div className={styles.group}
            onMouseOver={()=>{
              setShowdesc(true)
              setText('Designing all HVAC installations in AUTODESK REVIT. We work in REVIT through all stages of project documentation: conception, permit, tender and executive documentation. It is full cooperation in designing sanitary installations from scratch in the REVIT environment.')
              }} onMouseLeave={()=>{
                setShowdesc(false)
                setText('')
                }}
            >
                  <div>
                    <Image src={logo} width={68} height={68} className={styles.image}/>
                  </div>
                  <div className={styles.companyName}>
                    <span>INŻYNIERIA</span>
                  </div>
            </div>
          </div>

          <div className={styles.smallContainer}
          >
            <div className={styles.group}
            
            onMouseOver={()=>{
              setShowdesc(true)
              setText('We are a design studio specializing in energy efficient building. We make energy simulation and optimization of building. We design all installation and analyze thermal problems, including daylighting, thermal bridges, heat gains and heat loses. We save money our Clients and save environmental. Be smart and work with us.')
              }} onMouseLeave={()=>{
                setShowdesc(false)
                setText('')
                }}

            >
                  <div>
                    <Image src={logo} width={68} height={68} className={styles.image}/>
                  </div>
                  <div className={styles.companyName}>
                    <span>SERWIS</span>
                  </div>
            </div>
          </div>
      </div>
  )
}

export default ListWithLogo