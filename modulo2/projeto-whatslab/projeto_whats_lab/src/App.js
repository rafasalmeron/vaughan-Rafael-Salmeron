import React from "react";
import styled from "styled-components";
import Comp_Mensagem from "./componetes/Comp_Mensagem";
import Fundo_Whatapp from "./img/whatappFundo.jpg";
import { Left_Right } from "./componetes/Left_Right";

const Container_Principal = styled.div`
  height: 100vh;
  border: 1px solid black;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${Fundo_Whatapp});
`;
const Conteiner_Mensagem_Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex: 1;
`;

class App extends React.Component {
  state = {
    mensagens: [],
  };

  adicionar_Mensagem = (mensagem) => {
    this.setState({ mensagens: [...this.state.mensagens, mensagem] });
  };

  deletando_Messagem = (mensagem) => {
    this.setState({mensagens: this.state.mensagens.filter(
      msg => msg !== mensagem)})
  }

  render() {
    return (
      <Container_Principal>
        <Conteiner_Mensagem_Principal>
          {
          
          this.state.mensagens.map((mensagem, key) => 
            <Left_Right 
            deletando_Mensagem={this.deletando_Messagem}
            mensagem={mensagem}
            key={key}>
            </Left_Right>)
                   
          }
        </Conteiner_Mensagem_Principal>
        <Comp_Mensagem adicionar_Mensagem={this.adicionar_Mensagem} />
      </Container_Principal>
    );
  }
}
export default App;
