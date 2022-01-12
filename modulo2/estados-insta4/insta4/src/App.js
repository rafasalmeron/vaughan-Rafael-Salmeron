import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/160/150'}
        />
        <Post
          nomeUsuario={'laurinha'}
          fotoUsuario={'https://picsum.photos/20/29'}
          fotoPost={'https://picsum.photos/200/190'}
        />
        <Post
          nomeUsuario={'claudinha'}
          fotoUsuario={'https://picsum.photos/30/40'}
          fotoPost={'https://picsum.photos/170/180'}
        />
      </MainContainer>
    );
  }
}

export default App;
