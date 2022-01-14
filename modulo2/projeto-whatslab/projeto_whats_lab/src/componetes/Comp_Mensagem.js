import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import App from "../App";

const Conteiner_Mensagem = styled.form`
    display: flex;
`
const Input_Usuario = styled.input`
    width: 80px;
`
const Input_Texto = styled.input`
    flex: 1
`



class Comp_Mensagem extends React.Component{
    state = {
        mensagem_usuario: "",
        mensagem_texto: ""
    }


    on_change_usuario = (event) => {
    this.setState({mensagem_usuario: event.target.value})
}

    on_change_texto = (event) => {
    this.setState({mensagem_texto: event.target.value})
}

    ao_enviar_mensagem = (event) => {
        event.preventDefault()
        const mensagem = {
        usuario: this.state.mensagem_usuario,
        texto: this.state.mensagem_texto
    }
    
    this.props.adicionar_Mensagem(mensagem)
    this.setState({mensagem_texto: ""})
}

    render(){
        return (
            <Conteiner_Mensagem onSubmit={this.ao_enviar_mensagem}>
                <Input_Usuario
                    placeholder="Usuario"
                    onChange={this.on_change_usuario}
                    value={this.state.mensagem_usuario}
                />
                <Input_Texto
                    placeholder="Mensagem"
                    onChange={this.on_change_texto}
                    value={this.state.mensagem_texto}
                />
                <button>Enviar</button>
            </Conteiner_Mensagem>
        )
    }
}

export default Comp_Mensagem 