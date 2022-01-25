import React from "react";
import InitialPage from "./Components/InitialPage";
import UsersList from "./Components/UserList";
import seta from "./img/arrow_right_alt_black_24dp.svg"

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
      <div>
        {this.state.pagina === "initialPage" ? <InitialPage/> : <UsersList/>}
        <button onClick={this.mudarPagina}>Trocar Página</button>
      </div>
    )
  }
}

export default App