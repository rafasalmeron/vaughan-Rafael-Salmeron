import axios from 'axios'
import React from 'react'
import { getPlaylistTracks } from '../../constants/urls'

export default class PlaylistDetailPage extends React.Component {
  state = {
    tracks: []
  }
  
  componentDidMount() {
    this.getPlaylistTracks()
  }
  getPlaylistTracks = () => {
    const axiosConfig = {headers: 
      { Authorization: "rafael-salmeron-vaughan"}}
    axios.get(`${getPlaylistTracks}`,
    this.props.id,
    axiosConfig)
    .then((res) => this.setState({tracks: res.data}))
    .catch((err) => console.log(err.response))
  }
  render () {
  return (
    <div>
      <p>Nome: {this.state.tracks.name}</p>
      <p>Artista: {this.state.tracks.artist}</p>
      <p>Música: {this.state.tracks.url}</p>
      <button onClick={this.props.backPlaylists}>Voltar</button>
      {this.props.id}
    </div>
  )
  }
}