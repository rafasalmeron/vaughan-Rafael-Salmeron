import axios from 'axios'
import React from 'react'
import { URL_BASE } from '../../constants/urls'
import { CardPlayer } from './styled'

export default class PlaylistDetailPage extends React.Component {
  state = {
    tracks: [],
    name: "",
    artist: "",
    url: ""
  }
  handleSubmit(event) {
    event.preventDefault()
  }

  handleInputName=(event)=>{
    this.setState({name: event.target.value})
  }

  handleInputArtist=(event)=>{
    this.setState({artist: event.target.value})
  }

  handleInputUrl=(event)=>{
    this.setState({url: event.target.value})
  }

  componentDidMount() {
    this.getPlaylistTracks()
  }
  getPlaylistTracks = () => {
    const axiosConfig = {headers: 
      { Authorization: "rafael-salmeron-vaughan"}}
    axios.get(`${URL_BASE}/${this.props.id}/tracks`,
    axiosConfig)
    .then((res) => this.setState({tracks: res.data.result.tracks}))
    .catch((err) => console.log(err.response))
  }
  addTrackToPlaylist = () => {
    const axiosConfig = {headers: 
      { Authorization: "rafael-salmeron-vaughan"}}
    const body = { 
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    } 
    axios.post(`${URL_BASE}/${this.props.id}/tracks`, body,
    axiosConfig)
    .then((res) => {
      this.setState({tracks: res.data.result.tracks})
      this.getPlaylistTracks()
      console.log(res.data.result.tracks)
    })
    .catch((err) => console.log(err.response))
  }
  
  render () {
    const tracks2 = this.state.tracks.map((musicas, id) =>
    <div key={id}>
    <p>Nome: {musicas.name}</p>
    <p>Artista: {musicas.artist}</p>
    <CardPlayer src={musicas.url}></CardPlayer>
    </div>
    )
    console.log()
  return (
    <div>
      {tracks2}
      <div>
          <input 
          placeholder="Nome da Música"
          value={this.state.name}
          onChange={this.handleInputName}/>
          <input 
          placeholder="Artista"
          value={this.state.artist}
          onChange={this.handleInputArtist}/>
          <input 
          placeholder="Digite a url"
          value={this.state.url}
          onChange={this.handleInputUrl}/>
        <button onClick={this.addTrackToPlaylist}>Submit</button>
      </div>
      <button onClick={this.props.handlePlaylistsPage}>Voltar</button>
    </div>
  )
  }
}
