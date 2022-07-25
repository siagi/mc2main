import router from "next/router";
import styles from "../../../styles/Dashboard.module.scss"

export interface Props {
    name:string;
    link:()=>void;
}
const Button = ({props}:{props:Props}) => {
    return(
        <button className={styles.button_side_menu} onClick={()=>props.link()}>{props.name}</button>
    )
}
export default Button;