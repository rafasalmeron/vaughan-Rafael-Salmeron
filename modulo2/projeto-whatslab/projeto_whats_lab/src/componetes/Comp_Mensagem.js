import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import App from "../App";







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

    ao_enviar_mensagem = () => {
    const mensagem = {
        usuario: this.state.mensagem_usuario,
        texto: this.state.mensagem_texto
    }
    
    this.props.adicionar_Mensagem(mensagem)
    this.setState({mensagem_texto: ""})
}

    render(){
        return (
            <div>
                <input
                    placeholder="Usuario"
                    onChange={this.on_change_usuario}
                    value={this.state.mensagem_usuario}
                />
                <input
                    placeholder="Mensagem"
                    onChange={this.on_change_texto}
                    value={this.state.mensagem_texto}
                />
                <button onClick={this.ao_enviar_mensagem}>Enviar</button>
            </div>
        )
    }
}

export default Comp_Mensagem 