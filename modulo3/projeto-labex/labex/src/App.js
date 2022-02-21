import HomeLogo from "./img/LabeX_LogotipoHome.gif"
import HomeHeader from "./img/LabeX_LogotipoHeaderNice.png"
import Footer from "./img/Labex_Footer.png"
import styled from "styled-components";
import  "./App.css"

const Test = styled.div`
  /* img{
    width: 300px;
  } */
`

function App() {
  return (
    <div className="Conteiner">
      <header className="Header">
        <img src={HomeHeader} alt="Header_Logo" />
        <button className="Buttons">Logon</button>
      </header>
      <main>
        <div>
          <img src={HomeLogo} alt="logo_Labex"/>
        </div>
        <div className="DivButtons">
          <button className="Buttons">Login</button>
          <button className="Buttons">Travels</button>
        </div>
      </main>
      <footer className="Footer">
        <div>
          <img src={Footer}  alt="Logo_Footer"/>
        </div>
        <div>
          <li><a href="facebook.com" target="_blank">Facebook</a></li>
          <li><a href="instagram.com" target="_blank">Instagram</a></li>
          <li><a href="twitter.com" target="_blank">Twitter</a></li>
        </div>
      </footer>
    </div>
  );
}

export default App;
