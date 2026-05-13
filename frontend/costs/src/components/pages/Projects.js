import styles from './Projects.module.css'
import Mensagem from "./layout/Mensagem"
import Container from './layout/Container'
import Linkbottun from './layout/Linkbottun'
import { useLocation } from "react-router-dom"
function Projects(){

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
return (

    <div className={styles.project_container}>
       <div className={ styles.title_container}>
         <h1>Meus Projetos</h1>
      <Linkbottun to='/newproject' text="Criar Projeto">Novo projeto</Linkbottun>
        </div>

    {message && <Mensagem type='sucess' mgs={message} />}
    
    <Container customClass="start">
        <p>Projetos</p>
    </Container>
    </div>

)
}

export default Projects