import styled from "styled-components"

const AddSection = styled.div`
    display: flex;
    width: 46rem;
    flex-direction: column;
    margin-top: -1.8rem;
    justify-content: center;

    form {
        display: flex;
        gap: 0.5rem;
    }

    form textarea {
        width: 40rem;
        height: 3.375rem;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #262626;
        font-family: "Inter", sans-serif;
        font-weight: 400;
        line-height: 1.375rem;
        color: #808080;
        resize: none;
    }

    .button {
        display: flex;
        align-items: center;
        text-align: center;
        background-color: #1E6F9F;
        padding: 1rem;
        border-radius: 0.5rem;
        color: #F2F2F2;
    }
    .button button{
        font-family: "Inter", sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #F2F2F2;
        margin-right: 0.5rem;
    }


    section{
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
    }
`
export default AddSection



