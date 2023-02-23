import styled from "styled-components";

const TaskSection = styled.section`

    width: 46rem;
    margin: 4rem 0 17.625rem 0;

    .progress{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 700;
    }
    strong{
        font-size: 12px;
        color: #d9d9d9;
        margin-left: 0.5rem;
        background-color: #333333;
        border-radius: 999px;
        padding: 0.5rem;
    }

    .created{
        color: #4EA8DE;
    }

    .done{
        color: #8284fa;
    }

    .tasks{
        display: flex;
        margin-top: 1.5rem;
        flex-direction: column;
        gap: 0.75rem;
    }
`

export default TaskSection