import React from 'react'
import PlaylistDetailPage from './pages/PlaylistDetailPage/PlaylistDetailPage';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import TutorialPage from './pages/TutorialPage/TutorialPage';
import './index.css'

class App extends React.Component {
  state = {
    currentScreen: "welcome",
    selectedPlaylist: ""
  }

  handlePlaylistsPage = () => {
    this.setState({currentScreen: "playlists"})
  }
  handleDetailsPage = (id) => {
     this.setState({currentScreen: "playlistDetail", selectedPlaylist: id})
  }
  handleTutorialPage = () => {
    this.setState({currentScreen: "tutorial"})
  }

  selectPage = () => {
    switch (this.state.currentScreen){
      case "welcome":
        return <WelcomePage handlePlaylistsPage={this.handlePlaylistsPage} handleTutorialPage={this.handleTutorialPage}/>
      case "playlists":
        return  <PlaylistsPage handleDetailsPage={this.handleDetailsPage}/>
      case "playlistDetail":
        return  <PlaylistDetailPage handlePlaylistsPage={this.handlePlaylistsPage} id={this.state.selectedPlaylist} handleTutorialPage={this.handleTutorialPage}/>
      case "tutorial":
        return <TutorialPage handlePlaylistsPage={this.handlePlaylistsPage}/>  
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
