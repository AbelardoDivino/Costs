import { useParams, useNavigate } from 'react-router-dom'
import styles from './Newproject.module.css'
import { useState, useEffect } from 'react'
import Projectform from '../project/Projectform'
import Loading from './layout/Loading'

function Project() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => setProject(data))
            .catch((err) => console.log(err))
    }, [id])

    function updateProject(formData) {
        const updated = { ...project, ...formData, id }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updated),
        })
            .then((resp) => resp.json())
            .then(() => {
                navigate('/projects', {
                    state: { message: 'Projeto atualizado com sucesso!' },
                })
            })
            .catch((err) => console.log(err))
    }

    if (!project) {
        return <Loading />
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Editar Projeto</h1>
            <p>Edite os dados do seu projeto</p>
            <Projectform
                handleSubmit={updateProject}
                btntext="Salvar Projeto"
                projectData={project}
            />
        </div>
    )
}

export default Project
