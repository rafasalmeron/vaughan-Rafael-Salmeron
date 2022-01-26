import React from "react";
import InitialPage from "./Components/InitialPage";
import UsersList from "./Components/UserList";
import styled from "styled-components";

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    
`

class App extends React.Component {
  state = {
    pagina: "initialPage"
  }

  mudarPagina = () => {
    if(this.state.pagina === "initialPage"){
      this.setState({pagina: "usersList"})
    }else{
      this.setState({pagina: "initialPage"})
    }
  }

  render() {
    return (
      <Conteiner>
        {this.state.pagina === "initialPage" ? <InitialPage/> : <UsersList/>}
        <button onClick={this.mudarPagina}>Trocar Página</button>
      </Conteiner>
    )
  }
}

export default App