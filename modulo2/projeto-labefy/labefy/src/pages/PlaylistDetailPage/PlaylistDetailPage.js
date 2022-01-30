import axios from 'axios'
import React from 'react'
import { URL_BASE } from '../../constants/urls'
import { CardPlayer, Pages, Post, Back, Add } from './styled'

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
      this.getPlaylistTracks()
      this.setState({name: "", artist: "", url: ""})
      console.log(res.data.result.tracks)
    })
    .catch((err) => console.log(err.response))
  }
  
  render () {
    const tracks2 = this.state.tracks.map((musicas, id) =>
    <Post key={id}>
      {/* <p>Nome: {musicas.name}</p>
      <p>Artista: {musicas.artist}</p> */}
      <CardPlayer width="50" height="50" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write" 
      src={musicas.url}></CardPlayer>
    </Post>
    )
  return (
    <Pages>
        <div>
         <h4>Tracks:</h4> 
        {tracks2}
        </div>
      <Add>
          <h3>Adicione uma música a sua playlist:</h3>
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
          onChange={this.handleInputUrl}/><br />
          <button onClick={this.addTrackToPlaylist}>Submit</button><br />
          <Back onClick={this.props.handlePlaylistsPage}>Voltar</Back>
          <div>
            <p>Tutorial de como adicionar a url corretamente:</p>
            <button onClick={this.props.handleTutorialPage}>Tutorial</button>
          </div>
      </Add>
    </Pages>
  )
  }
}
