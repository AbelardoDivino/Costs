import { useEffect, useState } from 'react';
import Input from '../form/Input'
import Select from '../form/Select';
import Submit from '../form/Submit';
import styles from './Projectform.module.css'
function Projectform({btntext}){

const [categories,setcategories] = useState([])

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
    return (
        <form className={styles.form}>
         <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o nome do projeto' />

           <Input
           type='number'
           text='Orçamento do Projeto'
           name='budget'
           placeholder='Insira o orçamento total'
           />

            <div>
              <Select name="category_id" text="Selecione a categoria" options={categories} />
            </div>

           <Submit text={btntext} />
        </form>
    )
}
export default Projectform;
