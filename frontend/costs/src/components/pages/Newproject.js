import Projectform from '../project/Projectform'
import {useNavigate} from 'react-router-dom'
import styles from './Newproject.module.css'
function Newproject(){

      const navigate = useNavigate()
     function createpost(project){
project.cost = 0
project.services = []

fetch("http://localhost:5000/projects",{
    method:"POST",
    headers:{
        'Content-Type':'application/json',
    },
    body: JSON.stringify(project)
}).then(
    (resp => resp.json())
).then(
    (data) => {
        console.log(data)
        navigate('/')
    }
).catch(err => console.log("erro"))


  }




    return(
            <div className={styles.newproject_container}>
                <h1>Criar Projeto</h1>
                <p>Crie seus Projetos para depois adicionar os seus serviços</p>
                <Projectform handleSubmit={createpost} btntext="Criar Projeto"/>
            </div>
    )
}
export default Newproject