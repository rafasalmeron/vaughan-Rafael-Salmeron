import styled from "styled-components";

export const ListaCard = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    &:hover {
        cursor: pointer;
        background-color: blueviolet;
    }
    display: flex;
    justify-content: space-between;
`
export const ConteinerPlaylist = styled.div`
    border: 1px solid black;
    padding: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
`
export const Delete = styled.button`
    padding: 0;
    border: none;
    background: none;
    img {
        width: 25px;
    }
    &:hover {
        cursor: pointer;
        img{
            width: 30px;
        }
    }
`
export const ConteinerIndividual = styled.div`
    display: flex;
`