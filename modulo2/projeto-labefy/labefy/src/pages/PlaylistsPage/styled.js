import styled from "styled-components";

export const ListaCard = styled.div`
    border: 1px solid #9c1a1a;
    padding: 10px;
    margin: 5px;
    width: 200px;
    &:hover {
        cursor: pointer;
        background-color: gray;
    }
    display: flex;
    justify-content: space-between;
    strong{
        color: #9c1a1a;
    }
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
            width: 26px;
        }
    }
`
export const ConteinerIndividual = styled.div`
    display: flex;
`
export const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  justify-content: space-evenly;

  h3 {
    color: #9c1a1a;
  }
  h2 {
    color: white;
  }
`
export const AddPlaylist = styled.div`
    input{
        width: 60%;
        margin: 0 auto;
        padding: 10px;
        border: none;
        margin-bottom: 10px;
        border-radius: 50px;
        }
    button {
        background-color: #852222;
        border-radius: 400px;
        border-width: 0;
        color: white;
        display: inline-block;
        font-size: 14px;
        letter-spacing: 2px;
        line-height: 1;
        min-width: 160px;
        padding: 8px 24px 9px;
        text-decoration: none;
        text-transform: uppercase;
        white-space: normal;
        :hover {
            background-color: #850000;
            cursor: pointer;
        }
        :active {
            background-color: #1aa34a;
        }
    }
    h3 {
        color: white;
        } 
`
