import React from 'react'
import error from "../../assets/404.png";
import { Conteiner, ErrorImg } from './style';

const ErrorPage = () => {

    return (
        <Conteiner>
            <ErrorImg src={error} />
        </Conteiner>
    )
}

export default ErrorPage