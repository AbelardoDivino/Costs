import Projectform from '../project/Projectform'
import styles from './Newproject.module.css'
function Newproject(){
    return(
            <div className={styles.newproject_container}>
                <h1>Criar Projeto</h1>
                <p>Crie seus Projetos para depois adicionar os seus serviços</p>
                <Projectform btntext="Criar Projeto"/>
            </div>
    )
}
export default Newproject