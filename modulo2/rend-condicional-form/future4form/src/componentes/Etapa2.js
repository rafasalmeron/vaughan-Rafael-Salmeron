import React from "react";
import PerguntaAberta from "./PerguntaAberta";


class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h2>Informações Ensino Superior</h2>
        <PerguntaAberta pergunta={"5. Qual Curso?"} />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;
