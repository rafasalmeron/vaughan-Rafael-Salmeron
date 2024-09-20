import React from "react";
import Etapa1 from "./componentes/Etapa1";
import Etapa2 from "./componentes/Etapa2";
import Etapa3 from "./componentes/Etapa3";
import EtapaFinal from "./componentes/EtapaFinal";
import styled from "styled-components";
const Center = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizar = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <EtapaFinal />;
      default:
        return <Etapa1 />;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <Center>
        {this.renderizar()}
        <br />
        {this.state.etapa !== 4 && (
          <button onClick={this.proximaEtapa}>Próxima Etapa</button>
        )}
      </Center>
    );
  }
}

export default App;
