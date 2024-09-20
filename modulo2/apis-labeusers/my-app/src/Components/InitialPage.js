import react from "react";
import axios from "axios";
import styled from "styled-components";

const ConteinerSigin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;


class initialPage extends react.Component {
  state = {
    name: "",
    email: "",
  };



  handleName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleCreateUser = () => {
    const axiosConfig = {
      headers: { Authorization: "rafael-salmeron-vaughan" },
    };
    const body = {
      name: this.state.name,
      email: this.state.email,
    };
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      axiosConfig
    )
    .then(() => {
      alert(`Usuário ${this.state.name} Criado com Sucesso!`);
      this.setState({name: "", email: ""});
    })
    .catch(error => {
      alert(error.response.data.message)
    })
  };

  render() {
    
    return (
      <ConteinerSigin>
        <input
          placeholder="Nome"
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          placeholder="e-mail"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.handleCreateUser} >Criar Usuário</button>
      </ConteinerSigin>
    );
  }
}

export default initialPage;