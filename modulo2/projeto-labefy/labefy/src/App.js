import React from 'react'
import PlaylistDetailPage from './pages/PlaylistDetailPage/PlaylistDetailPage';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';


class App extends React.Component {
  state = {
    currentScreen: "playlists",
    selectedPlaylist: ""
  }

  handleDetailsPage = (id) => {
     this.setState({currentScreen: "playlistDetail", selectedPlaylist: id})
  }
  backPlaylists = () => {
    this.setState({currentScreen: "playlists", selectedPlaylist: ""})
  }

  selectPage = () => {
    switch (this.state.currentScreen){
      case "welcome":
        return <WelcomePage />
      case "playlists":
        return  <PlaylistsPage handleDetailsPage={this.handleDetailsPage}/>
      case "playlistDetail":
        return  <PlaylistDetailPage backPlaylists={this.backPlaylists} id={this.state.selectedPlaylist}/>
      default:
        return  <WelcomePage /> 
    }
  }

  render () {
  return (
    <div>
      {this.selectPage()}
    </div>
  )
  }
}

export default App;
