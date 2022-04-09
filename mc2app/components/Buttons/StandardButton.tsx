import { FunctionComponent } from 'react'
import styles from '../../styles/StandardButton.module.scss'


const StandardButton:FunctionComponent<{text:string, type:string}> = ({text, type}:{text:string, type:string}) => {
  return (
      <button className={type === 'outline' ? styles.outline:styles.solid}>
          {text}
      </button>
  )
}

export default StandardButton