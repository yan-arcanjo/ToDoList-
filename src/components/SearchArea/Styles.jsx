import styled from "styled-components"

const Search = styled.form`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    padding: 0 1rem;
    margin-top: -1.8rem;

    textarea{
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

    button {
        background-color: #1E6F9F;
        padding: 1rem;
        font-family: "Inter", sans-serif;
        font-weight: 700;
        color: #F2F2F2;
        border-radius: 0.5rem;
    }
`
export default Search