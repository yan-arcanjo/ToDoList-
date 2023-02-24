import AddSection from "./Styles"
import TaskBox from "../TaskBox/TaskBox";
import { useState } from "react";
import { PlusCircle } from "phosphor-react";


function SearchArea(){

    const [tasks, setNewTask] = useState([]);

    const createNewTask = (event) => {
        event.preventDefault();
        setNewTask([...tasks, event.target.search.value]);
    }

    return(
        <AddSection>
            <form onSubmit={createNewTask}>
                <textarea 
                    name="search" 
                    placeholder="Adicione uma nova tarefa"
                />
                <div className="button">
                    <button type="submit">Criar</button>
                    <PlusCircle size={20} />
                </div> 
            </form>

            <section>
                <div className="progress">
                    <h3 className="created">Tarefas criadas<strong>{tasks.length}</strong></h3>
                    <h3 className="done">Concluidas<strong>2 de {tasks.length}</strong></h3>
                </div>
                <div className="tasks">
                    {
                        tasks.map((text)=>{
                            return(
                                <TaskBox text={text} />
                            )
                        })
                    }
                </div>
            </section>
        </AddSection>  



        
    )
}

export default SearchArea