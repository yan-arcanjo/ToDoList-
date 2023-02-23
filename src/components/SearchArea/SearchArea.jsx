import Search from "./Styles"

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
            <button type="submit">Criar</button>
        </Search>  
    )
}

export default SearchArea