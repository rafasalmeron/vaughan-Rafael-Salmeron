import React from "react";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Dados Gerais</h2>

        <p>1. Qual o seu nome?</p>
        <input />
        <p>2. Qual sua idade?</p>
        <input />
        <p>3. Qual seu e-mail?</p>
        <input />
        <p>4. Qual a sua escolaridade?</p>
        <select>
          <option value="">--escolha uma opção--</option>
          <option value="Ensino médio Completo">Ensino médio Completo</option>
          <option value="Ensino médio incompleto">
            Ensino médio incompleto
          </option>
          <option value="Ensino Superior incompleto">
            Ensino Superior incompleto
          </option>
          <option value="Ensino Superior completo">
            Ensino Superior completo
          </option>
        </select>
      </div>
    );
  }
}

export default Etapa1;
