import { useRouter } from 'next/router'
import styles from '../../styles/Projects.module.scss'
import projectsdata from '../../sampledata/projects'
import { Project } from '../../types/types';
import { useEffect, useState } from 'react';

const DetailedProject = ({data}:{data:typeof projectsdata}) => {
    const [detailedProject,setDetailedProject] = useState<Project>();
    const router = useRouter();
    const id = router.query;

    useEffect(()=>{
        const proj = data.find(item => item._id === id.id);
        setDetailedProject(proj);
    },[data, id])



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

export async function getServerSideProps() {
    console.log('here');
  
    const a:typeof projectsdata = projectsdata;
    const data = a;
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default DetailedProject