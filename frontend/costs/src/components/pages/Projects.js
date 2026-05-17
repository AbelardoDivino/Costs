import styles from './Projects.module.css'
import Mensagem from "./layout/Mensagem"
import Container from './layout/Container'
import Linkbottun from './layout/Linkbottun'
import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import Projectscard from './Projectscard'
import Loading from './layout/Loading'
function Projects(){

    const [projects,setprojects] = useState([])
    const [removeloading,setremoveloading] = useState(false)
    const [projectsmesage, setprojectmesage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:5000/projects',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then(resp => resp.json())
        .then(data=>{
            console.log(data)
            setprojects(data)
            setremoveloading(true)
        })
        .catch(err => console.log(err))
        },300)
    },[])

    function removerprojeto(id){
fetch(`http://localhost:5000/projects/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(resp => resp.json())
.then(data => {
    setprojects(projects.filter((project) => project.id !== id))
    setprojectmesage('Projeto deletado com sucesso')
})
.catch(err => console.log(err))
    }

return (

    <div className={styles.project_container}>
       <div className={ styles.title_container}>
         <h1>Meus Projetos</h1>
      <Linkbottun to='/newproject' text="Criar Projeto">Novo projeto</Linkbottun>
        </div>

    {message && <Mensagem type='sucess' mgs={message} />}
    {projectsmesage && <Mensagem type='sucess'msg={projectsmesage}></Mensagem> }    
    <Container customClass="start">
        <p>Projetos</p>
        {projects.length > 0 &&
        projects.map((project) => (
          <Projectscard 
          id={project.id}
          name={project.name} 
          budget={project.budget}
         category={project.categories?.name}
         key={project.id}
         handleremove={removerprojeto}
          />
        ))}
        {!removeloading && <Loading></Loading>}
        {removeloading && projects.length===0 &&(
            <p>Nao ha projetos cadastrados</p>
        )}
    </Container>
    </div>

)
}

export default Projects