import styles from './layout/Projectscard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Projectscard({id,name,budget,category,handleremove}){

    const remove = (e) =>{
        e.preventDefault()
        handleremove(id)
    }
    return(
        <div className={styles.card}>
           <h4>{name}</h4>
           <p>
            <span className={styles.budget}>Orçamento: R${budget}</span>
           </p>
           <p className={styles.category}>
            <span></span> {category}
           </p>
           <div className={styles.actions}>
           <Link to=''> <p><BsPencil /> Editar</p></Link>
           
           <Link to=''>
  <p onClick={remove}>
    <BsFillTrashFill /> Remover
  </p>
</Link>

           </div>
        </div>
    )
}
export default Projectscard