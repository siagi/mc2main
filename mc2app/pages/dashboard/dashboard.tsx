import AddMember from 'components/Dashboard/AddMember';
import AddNews from 'components/Dashboard/AddNews';
import AddProject from 'components/Dashboard/AddProject';
import Button, { Props } from 'components/Dashboard/Elements/Button'
import Members from 'components/Dashboard/Memberts';
import { useState } from 'react'
import styles from '../../styles/Dashboard.module.scss'
const Dashboard = ({text, type}:{text:string, type:string}) => {
    const [page, setPage] = useState<string>();
    const menuElements:Props[] = [
        {name:'News', link:()=>setPage('news')},
        {name:'Projects', link:()=>setPage('projects')},
        {name:'Members', link:()=>setPage('members')}
];
const RenderPage = ({page}:{page?:string}) => {
    switch (page) {
        case 'news':
            return <AddNews/>
        case 'projects':
            return <AddProject/>
        case 'members':
            return (
                <>
                    <AddMember/>
                    <Members/>
                </>
            )
        default:
            return <></>
    }
}
  return (
      <div className={styles.main}>
        <div className={styles.left_menu}>
            {menuElements.map((item)=>{
                return(
                    <>
                        <Button key={item.name} props={
                            {
                                name:item.name,
                                link:item.link,
                            }
                        }/>
                    </>
                )
            })}
        </div>
        <div>
            <RenderPage page={page}/>
        </div>
      </div>
  )
}

export default Dashboard