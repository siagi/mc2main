import { FunctionComponent, useEffect, useState } from 'react'
import styles from '../styles/Popup.module.scss'
import { Children, Project } from '../types/types'
import projectsdata from '../sampledata/projects'


const Popup = ({id, close}:{id:string, close:(arg:boolean)=>void}) => {

    const [detailedProject, setDetailedProject] = useState<Project>();
    useEffect(()=>{
        setDetailedProject(projectsdata.find(item=> item._id === id))
    },[])

  return (
      <div className={styles.container}>
          <div>
              {detailedProject && 
                <div>
                    {detailedProject.name}
                    <button onClick={()=>close(false)}>Back to projects</button>
                </div>
              }
          </div>
      </div>
  )
}

export default Popup