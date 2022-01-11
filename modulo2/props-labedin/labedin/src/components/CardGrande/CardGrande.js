import React from 'react';
import styled from 'styled-components';

const BigCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `

const BigCard2 = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `

const BigCard3 = styled.h4`
    margin-bottom: 15px;
    `

const BigCard4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `

function CardGrande(props) {
    return (
        <BigCard>
            <BigCard2 src={ props.imagem } alt={""} />
            <BigCard4>
                <BigCard3>{ props.nome }</BigCard3>
                <p>{ props.descricao }</p>
            </BigCard4>
        </BigCard>
    )
}

export default CardGrande;