import styled from "styled-components";

export const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1c1c1c;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  justify-content: space-evenly;
  h3 {
    color: #9c1a1a;
  }
  h2 {
    color: white;
  }
  p {
      color: #9c1a1a;
  }
  img {
    width: 150px;
    height: 100px;
  }
  div > p{
    color: #9c1a1a;
  }
`

export const Back = styled.button`
  background-color: #852222;
  border-radius: 500px;
  border-width: 0;
  color: white;
  display: inline-block;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 1;
  min-width: 160px;
  padding: 16px 48px 18px;
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
`;