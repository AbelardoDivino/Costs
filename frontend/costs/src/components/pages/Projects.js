import Mensagem from "./layout/Mensagem"
import { useLocation } from "react-router-dom"
function Projects(){

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
return (

    <div>
        <h1>Meus Projetos</h1>

    {message && <Mensagem type='sucess' mgs={message} />}
    
    </div>

)
}

export default Projects