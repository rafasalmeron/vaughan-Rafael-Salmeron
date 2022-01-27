import React from "react";
import axios from "axios";
import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
const Icone = styled.img`
  width: 15px;
`;
const UserList = styled.div`
  border: 1px solid black;
  width: 200px;
  padding: 3px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

class UsersList extends React.Component {
  state = {
    userList: [],
    pagina: "userList",
    userId: "",
    name: "",
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const axiosConfig = {
      headers: { Authorization: "rafael-salmeron-vaughan" },
    };
    axios
      .get(url, axiosConfig)
      .then((response) => {
        this.setState({ userList: response.data });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id} `
    axios.delete(url, {
        headers:{
            Authorization: "rafael-salmeron-vaughan"
        }
    })
    .then((res) => {
        alert("Usuário deletado!")
        this.getUsers()
    })
    .catch((err) => {
        alert("Fail!")
    })
  }

  render() {
    const user_list = this.state.userList.map((user) => {
      return (
        <UserList key={user.id}>
          {user.name}
          <Button onClick={() => this.deleteUser(user.id)}>
            <Icone alt="icone-delete" src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" />
          </Button>
        </UserList>
      );
    });

    return <Conteiner>{user_list}</Conteiner>;
  }
}

export default UsersList;
