import { useRouter } from 'next/router'
import styles from '../../styles/Projects.module.scss'
import projectsdata from '../../sampledata/projects'
import { Project } from '../../types/types';
import { useEffect, useState } from 'react';

const DetailedProject = () => {
    const [detailedProject,setDetailedProject] = useState<Project>();
    const router = useRouter();
    const id = router.query;

    useEffect(()=>{
        const proj = projectsdata.find(item => item._id === id.id);
        setDetailedProject(proj);
    },[id])



  return (
      <div className={styles.detailed}>
          {detailedProject && (
                 <div>
                     <div>{detailedProject.name}</div>
                     <div>{detailedProject.architect}</div>
                     <div>{detailedProject.name}</div>
                     <div>{detailedProject.name}</div>
                     <button onClick={()=> router.back()}>Back</button>
                 </div>
          )}
      </div>
  )
}

export default DetailedProject