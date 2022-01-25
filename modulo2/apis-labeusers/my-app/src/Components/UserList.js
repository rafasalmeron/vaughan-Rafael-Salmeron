import React from "react";
import axios from "axios";

class UsersList extends React.Component {
    state = {
        userList: [],
        pagina: "userList",
        userId: "",
        name: ""
    }


componentDidMount(){
    this.getUsers()
  }
  getUsers =()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const axiosConfig = {headers:{Authorization:"rafael-salmeron-vaughan"}}
   axios
   .get(url,axiosConfig)
   .then((response)=>{
     this.setState({userList: response.data})
     console.log(response.data)
   })
   .catch((err)=>{
    console.log(err.response)
   })
   }
   render() {
       return (
           <div>
           
           </div>
       )
   }

}

export default UsersList