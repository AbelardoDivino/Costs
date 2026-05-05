import Input from '../form/Input'
import Select from '../form/Select';
import Submit from '../form/Submit';
import styles from './Projectform.module.css'
function Projectform({btntext}){
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
              <Select name="category_id" text="Selecione a categoria" />
            </div>

           <Submit text={btntext} />
        </form>
    )
}
export default Projectform;
