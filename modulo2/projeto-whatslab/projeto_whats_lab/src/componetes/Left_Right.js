import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
`

const Caixa_De_Mensagem = styled.div`
    display: flex; 
    box-shadow:  3px 3px 3px gray; 
    max-width: 40%;
    height: 100%;
    line-height: 1.3;
    
    padding: 10px 15px;
    border-radius: 5px;
    text-align: ${props => props.posicionar};
    align-self: ${props => {
        if(props.posicionar === 'right') {
          return 'flex-end'
        } else {
          return 'flex-start'
        }
    }};
    flex-direction: column;
    background-color: ${props => {
        if(props.posicionar === 'right') {
          return '#dcf8c6'
        } else {
          return '#ffffff'
        }
     }};
`
const Usuario = styled.div`
color: #9AAC8C;
font-size: 0.8em;
font-weight: 600;
margin-bottom: 0.2em;
`

export class Left_Right extends React.Component {
    
  deletar_Mensagem = () => {
      if (window.confirm("Tem certeza que deseja deletar essa mensagem?")){
          this.props.deletando_Mensagem(this.props.mensagem)
      }
  }


    
  
    render() {

      let posicionar
      let nomeUsuario
      if(this.props.mensagem.usuario.toLowerCase() === "eu") {
          posicionar = "right"
      }else{
          posicionar = "left"
          nomeUsuario = <Usuario>{this.props.mensagem.usuario}</Usuario>
        }
          return (
              <Container onDoubleClick={this.deletar_Mensagem}>
                  <Caixa_De_Mensagem posicionar={posicionar}>
                      {nomeUsuario}
                      {this.props.mensagem.texto}
                  </Caixa_De_Mensagem>
              </Container>
            
            )
    }
}
  