import TaskBox from "../TaskBox/TaskBox"
import TaskSection from "./Styles"

function TaskArea(){
    return(
        <TaskSection>
            <div className="progress">
                <h3 className="created">Tarefas criadas<strong>5</strong></h3>
                <h3 className="done">Concluidas<strong>2 de 5</strong></h3>
            </div>
            <div className="tasks">
                <TaskBox/>
                <TaskBox/>
                <TaskBox/>
                <TaskBox/>
                <TaskBox/>
            </div>
        </TaskSection>
    )
}

export default TaskArea