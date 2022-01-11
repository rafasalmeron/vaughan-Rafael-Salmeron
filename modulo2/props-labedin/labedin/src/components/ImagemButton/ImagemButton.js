import React from 'react';
import styled from 'styled-components'


const ImgButton = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    `

const ImgButton2 = styled.img `
    width: 30px;
    margin-right: 10px;
    `
const ImgButton3 = styled.a`
    color: black;
    text-decoration: none;
    font-weight: bold;
    
    `

function ImagemButton(props) {
    return (
        <ImgButton>
            <ImgButton3 target={props.target} href={props.link} ><ImgButton2 src={ props.imagem } alt={"logo"}/>{ props.texto }</ImgButton3>
        </ImgButton>

    )   
}

export default ImagemButton;