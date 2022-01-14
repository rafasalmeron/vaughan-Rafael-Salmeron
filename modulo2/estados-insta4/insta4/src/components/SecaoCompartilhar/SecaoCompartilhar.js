import React, { Component } from "react";
import styled from "styled-components";
import iconeFacebook from "../../img/facebook.svg";
import iconeInstagram from "../../img/instagram.svg";
import iconeTwitter from "../../img/Twitter.png";


const CompartilharContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const Compartilhar = styled.img`
  width: 100%;
  margin-right: 5px;
`;

export class SecaoCompartilhar extends Component {
  state = {
    iconeFace: iconeFacebook,
    iconeInsta: iconeInstagram,
    iconeTt: iconeTwitter
  };

  onClickCompartilhar = () => {
    
  };

  render() {

    //Não sei como fazer essa lógica :(
    // let iconeFace = iconeFacebook
    // let iconeInsta = iconeInstagram
    // let iconeTt = iconeTwitter 



    return (
      <CompartilharContainer>
        <Compartilhar 
          onClick={this.onClickCompartilhar}
          icone={this.state.iconeFace}
          icone={this.state.iconeInsta}
          icone={this.state.iconeTt}
        />
      </CompartilharContainer>
    );
  }
}
