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
    axios.get(`${getPlaylistTracks}/${this.props.id}/tracks`,
    axiosConfig)
    .then((res) => this.setState({tracks: res.data.result.tracks}))
    .catch((err) => console.log(err.response))
    
  }
  
  render () {
    const tracks2 = this.state.tracks.map((musicas, id) =>
    <div key={id}>
    <p>Nome: {musicas.name}</p>
    <p>Artista: {musicas.artist}</p>
    <audio controls="controls"><source src={musicas.url}/></audio>
    </div>
    )
    console.log(tracks2)
  return (
    <div>
      {tracks2}
      <button onClick={this.props.backPlaylists}>Voltar</button>
    </div>
  )
  }
}