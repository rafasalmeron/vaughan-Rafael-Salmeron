import axios from 'axios'
import React from 'react'
import { getAllPlaylists } from '../../constants/urls'
import { ListaCard } from './styled'


export default class PlaylistsPage extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount(){
    this.getPlaylist()
  }

  getPlaylist = () => {
    const axiosConfig = {headers: 
      { Authorization: "rafael-salmeron-vaughan"}}
    axios.get(`${getAllPlaylists}`, axiosConfig)
    .then((res) => this.setState({playlists: [res.data.result]}))
    .catch((err) => console.log(err.response))
  }

  render () { 
    const playlist2 = this.state.playlists.map((lista) =>
      lista.list.map(listei =>
        <ListaCard 
          key={listei.id}
          onClick={() => this.props.handleDetailsPage(listei.id)}
        >
          {listei.name}</ListaCard>))
  return  <div>
            <h2>Playlists</h2>
            {playlist2}
          </div>
  }
}