import { useEffect, useState } from 'react';
import Input from '../form/Input'
import Select from '../form/Select';
import Submit from '../form/Submit';
import styles from './Projectform.module.css'
function Projectform({handleSubmit,btntext,projectData}){


  
const [categories,setcategories] = useState([])
const [project,setproject] = useState(projectData || {})

useEffect(()=>{
  
fetch("http://localhost:5000/categories",{
  method:"GET",
  headers:{
    "content-Type":"application/json"
  }
}).then((resp) => {
  return resp.json()
})
.then((data)=>{
  setcategories(data)
})
.catch(err => console.log("erro"))

},[])
const submit =  (e)=>{
e.preventDefault()
handleSubmit(project)
console.log(project)
}

function handlechange(e){
  setproject({...project, [e.target.name]: e.target.value})
  console.log(project)
}

function handlecategory(e){
  setproject({...project,categories:{
    id:e.target.value,
    name:e.target.options[e.target.selectedIndex].text,
  }})
}

    return (
        <form onSubmit={submit} className={styles.form}>
         <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o nome do projeto' handleOnChange={handlechange} value={project.name ? project.name : ''} />

           <Input
           type='number'
           text='Orçamento do Projeto'
           name='budget'
           placeholder='Insira o orçamento total'
           handleOnChange={handlechange} value={project.budget ? project.budget : ''}
           />

            <div>
              <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handlecategory} value={project.category_id ? project.category_id : ''} />
            </div>

           <Submit text={btntext} />
        </form>
    )
}
export default Projectform;