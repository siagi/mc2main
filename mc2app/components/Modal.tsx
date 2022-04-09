import { FunctionComponent } from 'react'
import styles from '../styles/Modal.module.scss'


const Modal:FunctionComponent<{text:string}> = ({text}:{text:string}) => {
  return (
      <div className={styles.container}>
          {text}
      </div>
  )
}

export default Modal