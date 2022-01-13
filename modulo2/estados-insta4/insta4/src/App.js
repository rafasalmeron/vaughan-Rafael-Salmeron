import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  // Inicializando o estado
  state = {
    // Lista de pessoas colocada no estado
    pessoas: [
      // O objeto abaixo representa uma pessoa. Ele possui
      // duas propridades: nome e email.
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/160/150",
      },
      {
        nomeUsuario: "laurinha",
        fotoUsuario: "https://picsum.photos/20/29",
        fotoPost: "https://picsum.photos/200/190",
      },
      {
        nomeUsuario: "claudinha",
        fotoUsuario: "https://picsum.photos/30/40",
        fotoPost: "https://picsum.photos/170/180",
      },
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaUsuario = () => {
    const novaPessoa = this.state.valorInputUsuario;
    const novoPessoas = [novaPessoa, ...this.state.pessoas];
    this.setState({ pessoas: novoPessoas });
  };
  adicionaFotoUsuario = () => {
    const novaPessoa = this.state.valorInputUsuario;
    const novoPessoas = [novaPessoa, ...this.state.pessoas];
    this.setState({ pessoas: novoPessoas });
  };
  adicionaFotoPost = () => {
    const novaPessoa = this.state.valorInputUsuario;
    const novoPessoas = [novaPessoa, ...this.state.pessoas];
    this.setState({ pessoas: novoPessoas });
  };

  adicionaUsuario = () => {
    const novaPessoa = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };
    const novoPessoas = [...this.state.pessoas, novaPessoa];
    this.setState({ pessoas: novoPessoas });
    this.setState({ valorInputUsuario: "", valorInputFotoUsuario: "", valorInputFotoPost: ""});
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <MainContainer>
          <Post
            nomeUsuario={pessoa.nomeUsuario}
            fotoUsuario={pessoa.fotoUsuario}
            fotoPost={pessoa.fotoPost}
          />
        </MainContainer>
      );
    });

    return (
      <MainContainer>
        <h2>Insta4</h2>
        <div>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"FotoUsuário"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"FotoPost"}
          />
          <button onClick={this.adicionaUsuario}>Adicionar</button>
        </div>

        {listaDeComponentes}
      </MainContainer>
    );
  }
}

export default App;
