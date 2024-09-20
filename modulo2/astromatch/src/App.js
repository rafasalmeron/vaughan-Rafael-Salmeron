import './App.css';
import Perfil from './components/Perfil/Perfil'
import Bottom from './components/Bottom/Bottom'
import styled from 'styled-components';

const Conteiner = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  border: 1px solid #000;
  height: 70%;
`

function App() {
  return (
      <body>
      <Conteiner>
        <header>
          Astromatch
        </header>
        <Perfil/>
        <section>
          <Bottom />
        </section>
      </Conteiner>
      </body>
  );
}
export default App;
