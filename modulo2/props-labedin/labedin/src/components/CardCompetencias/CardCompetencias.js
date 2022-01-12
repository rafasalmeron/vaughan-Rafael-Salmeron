import React from "react";
import styled from "styled-components";


const CardComp = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 35px;
    margin-bottom: 10px;
    height: 200px;
`



function CardCompetencias(props) {
    return (
        <CardComp>
            <ul>
                <li>{props.competencia1}</li>
                <li>{props.competencia2}</li>
                <li>{props.competencia3}</li>
                <li>{props.competencia4}</li>
            </ul>
        </CardComp>
    )
}

export default CardCompetencias;