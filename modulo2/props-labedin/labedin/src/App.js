import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import imagem from './img/Perfil.jpg';
import CardCompetencias from './components/CardCompetencias/CardCompetencias';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagem} 
          nome="Rafael Terra Salmeron" 
          descricao="
            Oi, eu sou Aluno da melhor escola de programação do Brasil, a Labenu.
             (Puxando um saco kkkk) 
          "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
        <div className="smallCard-Conteiner">
          <CardPequeno
            imagem="https://thumbs.dreamstime.com/b/email-icon-isolated-white-background-email-icon-trendy-design-style-email-icon-isolated-white-background-email-icon-183701610.jpg"
            nome="Email: "
            descricao=" rafasalmeronjr@gmail.com"          
          />
          <div>
          <CardPequeno
            imagem="https://i.pinimg.com/736x/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg"
            nome="Endereço: "
            descricao=" Rua do Imperador, 1250 - Petrópolis"          
          />
          </div>
        </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Estudando para ser um Dev Full-Stack!" 
        />
        
        <CardGrande 
          imagem="https://blog.anhanguera.com/wp-content/uploads/2021/08/anhanguera-ampli.png" 
          nome="Ampli" 
          descricao="Aqui eu estudo para ser um Engenheiro de Software." 
        />
      </div>
        <div className="page-section-container">
          <h2>Competências</h2>
          <CardCompetencias
            competencia1="Python Basics"
            competencia2="React Introdution"
            competencia3="C (Linguagem de Programação)"
            competencia4="Engenharia"
          />
        </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook"
          link="https://www.facebook.com/elrafa.salmeron" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter"
          link="https://twitter.com/home?lang=en" 
        />        
      </div>
    </div>
  );
}

export default App;
