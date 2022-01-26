import React from "react";
import InitialPage from "./Components/InitialPage";
import UsersList from "./Components/UserList";
import styled from "styled-components";

const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
`
const Square = styled.div`
  padding: 50px;
  border: 1px solid black;
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
        <button onClick={this.mudarPagina}>Trocar Página</button>
        <Square>
        {this.state.pagina === "initialPage" ? <InitialPage/> : <UsersList/>}
        </Square>
        
      </Conteiner>
    )
  }
}

export default App