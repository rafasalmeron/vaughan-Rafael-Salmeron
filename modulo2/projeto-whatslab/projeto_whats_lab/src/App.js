import React from "react";
import styledComponents from "styled-components";
import styled from "styled-components";
import Comp_Mensagem from "./componetes/Comp_Mensagem";

const Container_Principal = styled.div `
  height: 100vh;
  border: 1px solid black;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Conteiner_Mensagem_Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex: 1;
`







class App extends React.Component {
  state = {
    mensagens: [],
    
  };

  adicionar_Mensagem = (mensagem) => {
    this.setState({ mensagens: [...this.state.mensagens, mensagem] });
  };

  render() {
    
    return (
      
      <Container_Principal>
        
        <Conteiner_Mensagem_Principal>
        {this.state.mensagens.map((mensagem, key) => {
            return (
            <p key={key}>
              {`${mensagem.usuario}: ${mensagem.texto}`}
            </p>)
          })}
        </Conteiner_Mensagem_Principal>
        <Comp_Mensagem  adicionar_Mensagem={this.adicionar_Mensagem} />
      </Container_Principal>
      
    );
  }
}
export default App;
