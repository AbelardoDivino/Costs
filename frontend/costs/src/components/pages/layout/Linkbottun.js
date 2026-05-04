import { Link } from 'react-router-dom'
import styles from './Linkbottun.module.css'

function Linkbottun({to,text}){
    return(
        <Link to={to} className={styles.btn}> 
        {text} 
        </Link>
    )
}
export default Linkbottun