import styled from "styled-components";

export const CardPlayer = styled.iframe`
    overflow:hidden;
    height:60px;
    width: 400px;
    border: 0;
    margin:0;
`
export const Pages = styled.div`
width: 100vw;
height: 100vh;
background-color: #1c1c1c;
display: flex;
align-items: center;
text-align: center;
/* justify-content: flex-start; */
justify-content: space-evenly;
align-items: flex-start;

h3, h4 {
  color: #9c1a1a;
}
h2 {
  color: white;
}
`
export const Post = styled.div`
    p {
        color: #9c1a1a;
    }
`
export const Back = styled.button`
  background-color: #852222;
  border-radius: 500px;
  border-width: 0;
  margin: 5px;
  color: white;
  display: inline-block;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 1;
  min-width: 160px;
  padding: 8px 24px 9px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: normal;
  :hover {
    background-color: #850000;
    cursor: pointer;
  }
  :active {
    background-color: #1aa34a;
  }
`
export const Add = styled.div`
    border: 1px solid #850000;
    padding: 0px;
    div > p{
      color: #850000;
    }
    div > button{
      font-size: 7px;
      padding: 4px 12px 9px;
      min-width: 80px;
      max-width: 80px;
    }
    input{
      width: 60%;
      margin: 0 auto;
      padding: 10px;
      border: none;
      margin-bottom: 10px;
      border-radius: 50px;
    }
    button {
      background-color: #852222;
      border-radius: 500px;
      border-width: 0;
      margin: 10px;
      color: white;
      display: inline-block;
      font-size: 14px;
      letter-spacing: 2px;
      line-height: 1;
      min-width: 160px;
      padding: 8px 24px 9px;
      text-decoration: none;
      text-transform: uppercase;
      white-space: normal;
  :hover {
    background-color: #850000;
    cursor: pointer;
  }
  :active {
    background-color: #1aa34a;
  }
}
`