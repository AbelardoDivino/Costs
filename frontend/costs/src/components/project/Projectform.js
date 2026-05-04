function Projectform(){
    return (
        <form>
            <div><input type="text" placeholder="Insira o nome do projeto"></input></div>
            <div><input type="number" placeholder="Ensira o orçamento total"></input></div>
            <div>
                <select name="category_id">
                <option des>Selecione a categoria</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Criar projeto"></input>
            </div>
        </form>
    
    )
}
export default Projectform