import React from 'react';
import styled from 'styled-components';



const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;
    `;


const SmallCard2 = styled.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
    `;

/* .smallCard-container h4 {
    margin-bottom: 15px;
} */

const SmallCard3 = styled.div`
    display: flex;
    justify-content: space-evenly
    `;

function CardPequeno(props) {
    return (
        <SmallCard>
            <SmallCard2 src={ props.imagem } alt={""} />
            <SmallCard3>
                <h4>{ props.nome }&nbsp;</h4>
                <p>{ props.descricao }&nbsp;</p>
            </SmallCard3>
        </SmallCard>
    )
}

export default CardPequeno;