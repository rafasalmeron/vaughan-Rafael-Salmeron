import React from 'react'
import Spotify from '../../components/Spotify'
import { Pages, Sigin } from './styled'


export default class WelcomePage extends React.Component {
  render () {
    return (
      <Pages>
        <h2>Bem-Vindo ao Labefy</h2>
        <h3>Crie playlists, acesse suas playlists e ouça suas músicas favoritas!</h3>
        <Sigin onClick={this.props.handlePlaylistsPage}>ENTRAR</Sigin>
        <Spotify/>
      </Pages>
    )
  }
}
