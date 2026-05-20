// import { useParams, useNavigate } from 'react-router-dom'
// import styles from './Newproject.module.css'
// import { useState, useEffect } from 'react'
// import Projectform from '../project/Projectform'
// import Loading from './layout/Loading'

// function Project() {
//     const { id } = useParams()
//     const navigate = useNavigate()
//     const [project, setProject] = useState(null)
//     const [showserviceform,setshowserviceform] = useState(false)

//     useEffect(() => {
//         fetch(`http://localhost:5000/projects/${id}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then((resp) => resp.json())
//             .then((data) => setProject(data))
//             .catch((err) => console.log(err))
//     }, [id])

//     function updateProject(formData) {
//         const updated = { ...project, ...formData, id }

//         fetch(`http://localhost:5000/projects/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updated),
//         })
//             .then((resp) => resp.json())
//             .then(() => {
//                 navigate('/projects', {
//                     state: { message: 'Projeto atualizado com sucesso!' },
//                 })
//             })
//             .catch((err) => console.log(err))
//     }

//     function togleserviceform(){
//         setshowserviceform(!setshowserviceform)
//     }

//     if (!project) {
//         return <Loading />
//     }

//     return (
//         <div className={styles.newproject_container}>
//             <h1>Editar Projeto</h1>
//             <p>Edite os dados do seu projeto</p>
//             <Projectform
//                 handleSubmit={updateProject}
//                 btntext="Salvar Projeto"
//                 projectData={project}

//             />
// <button className={styles.btn} onClick={togleserviceform}>
//     {!showserviceform ? "Adicionar serviço" : "Fechar"}
// </button>

// <div className={styles.project_info}>
//     {showserviceform && (
//         <div className={styles.service_form}>
//             <h2>Adicionar Serviço</h2>

//             <form>
//                 <div className={styles.form_control}>
//                     <label>Nome do serviço:</label>
//                     <input type="text" placeholder="Ex: Desenvolvimento" />
//                 </div>

//                 <div className={styles.form_control}>
//                     <label>Custo do serviço:</label>
//                     <input type="number" placeholder="Ex: 500" />
//                 </div>

//                 <div className={styles.form_control}>
//                     <label>Descrição:</label>
//                     <textarea placeholder="Descrição do serviço"></textarea>
//                 </div>

//                 <button className={styles.btn}>Salvar Serviço</button>
//             </form>
//         </div>
//     )}

//     <div className={styles.services}>
//         <h2>Serviços</h2>

//         <div className={styles.service_card}>
//             <h3>Nome do serviço</h3>
//             <p>Custo: R$ 500</p>
//             <p>Descrição do serviço aqui</p>

//             <div className={styles.actions}>
//                 <button className={styles.edit_btn}>Editar</button>
//                 <button className={styles.delete_btn}>Excluir</button>
//             </div>
//         </div>
//     </div>
// </div>
//         </div>
//     )
// }

// export default Project

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Projectform from '../project/Projectform'
import Loading from './layout/Loading'

function Project() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [project, setProject] = useState(null)
    const [showserviceform, setshowserviceform] = useState(false)

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))

    }, [id])

    function updateProject(formData) {

        const updatedProject = {
            ...project,
            ...formData,
            id: id,
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProject),
        })
            .then((resp) => resp.json())
            .then(() => {

                navigate('/projects', {
                    state: {
                        message: 'Projeto atualizado com sucesso!'
                    }
                })

            })
            .catch((err) => console.log(err))
    }

    function toggleServiceForm() {
        setshowserviceform(!showserviceform)
    }

    if (!project) {
        return <Loading />
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', minHeight: '80vh', paddingTop: '2rem' }}>
        <div className="newproject_container" style={{ textAlign: 'left' }}>

            <h1>Editar Projeto</h1>

            <p>Edite os dados do seu projeto</p>

            <Projectform
                handleSubmit={updateProject}
                btntext="Salvar Projeto"
                projectData={project}
            />

            <button className="btn" onClick={toggleServiceForm}>
                {!showserviceform ? 'Adicionar Serviço' : 'Fechar'}
            </button>

            <div className="project_info">

                {showserviceform && (

                    <div className="service_form">

                        <h2>Adicionar Serviço</h2>

                        <form>

                            <div className="form_control">
                                <label>Nome do serviço</label>
                                <input
                                    type="text"
                                    placeholder="Digite o nome do serviço"
                                />
                            </div>

                            <div className="form_control">
                                <label>Custo do serviço</label>
                                <input
                                    type="number"
                                    placeholder="Digite o valor"
                                />
                            </div>

                            <div className="form_control">
                                <label>Descrição</label>

                                <textarea
                                    placeholder="Descrição do serviço"
                                >
                                </textarea>

                            </div>

                            <button className="btn">
                                Salvar Serviço
                            </button>

                        </form>

                    </div>

                )}

                <div className="services">

                    <h2>Serviços</h2>

                    <div className="service_card">

                        <h3>Desenvolvimento Frontend</h3>

                        <p>
                            <span>Custo:</span> R$ 500
                        </p>

                        <p>
                            Desenvolvimento da interface do projeto
                        </p>

                        <div className="actions">

                            <button className="edit_btn">
                                Editar
                            </button>

                            <button className="delete_btn">
                                Excluir
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </div>
    )
}

export default Project