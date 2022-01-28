import React from 'react'


export default class WelcomePage extends React.Component {
  render () {
  return (
    <div>
      <h2>Bem-Vindo a Labefy</h2>
      <p>Crie playlists, acesse suas playlists e ouça suas músicas favoritas!</p>
      <button onClick={this.props.handlePlaylistsPage}>ENTRAR</button>
    </div>
  )
  }
}