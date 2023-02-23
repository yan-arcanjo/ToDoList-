import Search from "./Styles"
import { PlusCircle } from "phosphor-react";

function SearchArea(){
    return(
        <Search onSubmit={
            (event)=> {
                event.preventDefault();
                console.log(event.target.search.value);
            }}>
            <textarea 
                name="search" 
                placeholder="Adicione uma nova tarefa"
            />
            <div className="button">
                <button type="submit">Criar</button>
                <PlusCircle size={20} />
            </div>
        </Search>  
    )
}

export default SearchArea