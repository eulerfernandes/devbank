import styled from "styled-components"

export const Container = styled.div`
    background-color: yellow;
    display: flexbox;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 15vh;
`
export const TopSite = styled.div`
    height: 30vh;
    display: flex;
    align-items: baseline;
    
    img { 

        max-height: 40%;

    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    max-width: 5000px;
`
export const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`
export const ContainerInput = styled.div`
    display: flex;
    gap: 20px;
    font-size: 20px;
    font-weight: bold;
`
export const InputLabel = styled.label`
    color: black;
    font-size: 18px;
    font-weight: bold;
    
`
export const Input = styled.input`
    background-color: black;
    padding: 5px;
    padding-left: 20px;
    outline: none;
    width: 100%;
`
export const Button = styled.button`
    border: none;
    border: 15px;
    background-color: chocolate;
    font-size: 16px;
    color: darkblue;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

     &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.8;
    }
`

