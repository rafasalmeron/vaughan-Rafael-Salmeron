import React from "react";
import styled from "styled-components";
import Icone_Enviar from "/home/elrafa/Labenu/vaughan-Rafael-Salmeron/modulo2/projeto-whatslab/projeto_whats_lab/src/img/send.svg"


const Conteiner_Mensagem = styled.form`
  display: flex;
`;
const Input_Usuario = styled.input`
  width: 80px;
  border: none;
  padding: 8px;
  border-radius: 10px;
  margin: 10px;
`;
const Input_Texto = styled.input`
  padding: 8px;
  border-radius: 10px;
  border: none;
  flex: 1;
  margin: 10px;
`;
const Enviar = styled.button`
  border: none;
  border-radius: 10px;
  padding: 8px;
  margin: 10px;
  background: none;
  cursor: pointer;
`;

class Comp_Mensagem extends React.Component {
  state = {
    nome_usuario: "",
    mensagem_texto: ""
  };

  on_change_usuario = (event) => {
    this.setState({ nome_usuario: event.target.value });
  };

  on_change_texto = (event) => {
    this.setState({ mensagem_texto: event.target.value });
  };

  ao_enviar_mensagem = (event) => {
    event.preventDefault();
    const mensagem = {
      usuario: this.state.nome_usuario,
      texto: this.state.mensagem_texto
    };

    this.props.adicionar_Mensagem(mensagem);
    this.setState({ mensagem_texto: "" });
  };

  render() {
    
            
    return (
      <Conteiner_Mensagem onSubmit={this.ao_enviar_mensagem}>
        <Input_Usuario
          placeholder="Usuario"
          onChange={this.on_change_usuario}
          value={this.state.nome_usuario}
        />
        <Input_Texto
          placeholder="Mensagem"
          onChange={this.on_change_texto}
          value={this.state.mensagem_texto}
        />
        <Enviar onmouseover="Enviar(this)"><img  src={Icone_Enviar}/></Enviar>
      </Conteiner_Mensagem>
    );
  }
}

export default Comp_Mensagem;
