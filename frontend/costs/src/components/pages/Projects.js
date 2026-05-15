import styles from './Projects.module.css'
import Mensagem from "./layout/Mensagem"
import Container from './layout/Container'
import Linkbottun from './layout/Linkbottun'
import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import Projectscard from './Projectscard'
function Projects(){

    const [projects,setprojects] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(()=>{
        fetch('http://localhost:5000/projects',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        }).then(resp => resp.json())
        .then(data=>{
            setprojects(data)
        })
        .catch(err => console.log(err))
    },[])

return (

    <div className={styles.project_container}>
       <div className={ styles.title_container}>
         <h1>Meus Projetos</h1>
      <Linkbottun to='/newproject' text="Criar Projeto">Novo projeto</Linkbottun>
        </div>

    {message && <Mensagem type='sucess' mgs={message} />}
    
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
          />
        ))}
    </Container>
    </div>

)
}

export default Projects