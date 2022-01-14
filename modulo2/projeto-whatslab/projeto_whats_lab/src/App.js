import React from "react";
import styled from "styled-components";
import Comp_Mensagem from "./componetes/Comp_Mensagem";



class App extends React.Component {
  state = {
    mensagens: [
      {
        usuario: "",
        texto: ""
      }

    ],
    
  };

  adicionar_Mensagem = (mensagem) => {
    this.setState({ mensagens: [...this.state.mensagens, mensagem] });
  };

  render() {
    
    return (

      <div>
        <h2>Hello World</h2>
        <div>
        {this.state.mensagens.map((mensagem) => {
            return (
            <p>
              {mensagem.usuario}
              {mensagem.texto}
            </p>)
          })}
        </div>
        <Comp_Mensagem adicionar_Mensagem={this.adicionar_Mensagem} />
      </div>
    );
  }
}
export default App;
