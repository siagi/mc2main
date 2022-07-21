/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Members.module.scss'

const positionColors:any = {
    hvac:"green",
    ceo:"grey",
    plumbing:"brown",
    electric:"red",
    office:"blue"
}


const Members = ({data}:{data:any}) => {
  return (
      <div className={styles.main}>
            {data && data.sort((a:any,b:any)=> a.industry.localeCompare(b.industry)).map((item:any)=>{
                return(
                    <div key={item._id} className={styles.profile}>
                        <div>
                            <img src={item.picture} alt={item.name} className={styles.picture} style={{border:`solid 4px ${positionColors[item.industry]}`}}/>
                        </div>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {item.position}
                        </div>
                    </div>
                )
            })}
      </div>
  )
}

export default Members