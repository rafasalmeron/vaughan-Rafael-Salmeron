import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeBookMarkOn from '../../img/BookMarkOn.svg'
import iconeBookMarkOff from '../../img/BookMarkOff.svg'

import iconeShare from '../../img/share.svg'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvar: false,
    numeroSalvamento: 0,
    compartilhando: false,
    numeroShare: 0
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoCompartilhar = () => {
    this.setState({
      compartilhando: false,
      numeroShare: this.state.numeroShare + 1
    })
  }

  onClickSalvar = () => {
    let novoNumeroSalvamento

    if(this.state.salvar) {
      novoNumeroSalvamento = this.state.numeroSalvamento - 1
    } else {
      novoNumeroSalvamento = this.state.numeroSalvamento + 1
    }

    this.setState({
      salvar: !this.state.salvar,
      numeroSalvamento: novoNumeroSalvamento
    })
  }

  onClickCurtida = () => {
    let novoNumeroCurtidas

    if(this.state.curtido) {
      novoNumeroCurtidas = this.state.numeroCurtidas - 1
    } else {
      novoNumeroCurtidas = this.state.numeroCurtidas + 1
    }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: novoNumeroCurtidas
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
    

    let iconeSalvar

    if(this.state.salvar) {
      iconeSalvar = iconeBookMarkOn
    } else {
      iconeSalvar = iconeBookMarkOff
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    } 

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilharSocial={this.aoCompartilhar}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
          />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
          valorContador={this.state.numeroSalvamento}
        />
        <IconeComContador
          icone={iconeShare}
          onClickIcone={this.onClickShare}
          valorContador={this.state.numeroShare}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post