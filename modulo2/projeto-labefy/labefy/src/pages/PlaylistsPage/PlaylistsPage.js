import axios from 'axios'
import React from 'react'
import { URL_BASE } from '../../constants/urls'
import { AddPlaylist, ConteinerIndividual, ConteinerPlaylist, Delete, ListaCard, Pages } from './styled'
import iconeDelete from '../../assets/img/delete.png'


export default class PlaylistsPage extends React.Component {
  state = {
    playlists: [],
    name: ""
  }
  handleInput=(event)=>{
    this.setState({name:event.target.value})
  }
  componentDidMount(){
    this.getPlaylist()
  }

  getPlaylist = () => {
    const axiosConfig = {headers: 
      { Authorization: "rafael-salmeron-vaughan"}}
    axios.get(URL_BASE, axiosConfig)
    .then((res) => this.setState({playlists: [res.data.result]}))
    .catch((err) => console.log(err.response))
  }
  createPlaylist = () => {
    const axiosConfig = {headers: 
      { Authorization: "rafael-salmeron-vaughan"}}
    const body = { name: this.state.name}
    axios.post(URL_BASE,body,axiosConfig)
    .then(( e) => {
      this.getPlaylist()
      this.setState({name: ""})
      e.preventDefault()
    })
    .catch((err) => {
      console.log(err.response)
    })
  }
  deletePlaylist = (id) => {
    const axiosConfig = {headers: 
      { Authorization: "rafael-salmeron-vaughan"}}
    axios.delete(`${URL_BASE}/${id}`,
    axiosConfig)
    .then((res) => {
      this.getPlaylist()
    })
    .catch((err) => console.log(err.response))
  }

  render () { 
    const playlist2 = this.state.playlists.map((lista) =>
      lista.list.map((listei, key) =>
        <ConteinerIndividual>
          <ListaCard 
          key={listei.id}
          onClick={() => this.props.handleDetailsPage(listei.id)}
        >
          <strong>{listei.name}</strong>
        </ListaCard>
        <Delete key={key}onClick={()=>this.deletePlaylist(listei.id)}>
          <img src={iconeDelete} alt='deletar'/>
        </Delete>        
        </ConteinerIndividual>
        ))
  return  <Pages>
          <ConteinerPlaylist>
            <div>
              <h2>Playlists</h2>
              {this.state.playlists.length>0? (playlist2): <p>Carregando ...</p>}
            </div>
            <AddPlaylist>
              <h3>Adicione uma Playlist:</h3>
              <input 
                placeholder="Nome da Playlist"
                value={this.state.name}
                onChange={this.handleInput}
              />
              <button onClick={this.createPlaylist}>Criar Playlist</button>
            </AddPlaylist>
          </ConteinerPlaylist>
          </Pages>
  }
}