import { Link } from "react-router-dom"
import styles from './layout/Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Link to="/" >
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/Contact">Contato</Link></li>
                <li className={styles.item}><Link to="/Company">Empresa</Link></li>
                <li className={styles.item}><Link to="/Newproject">Novo Projeto</Link></li>
                
                <li className={styles.item}><Link to="/Projects">Projetos</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;
