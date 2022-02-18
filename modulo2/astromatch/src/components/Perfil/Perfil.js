import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import './../../index.css'

const Content = styled.div`
    border: 1px solid #000;
    width: 200px;
    height: 250px;
    background-size: cover;
    display: grid;
    column-gap: 5px;
    grid-template-rows: 5fr 1fr;
    align-items: end;
    /* filter: blur(30px); */
    img{
        width: 200px;
        height: 150px;
    }
`
const A = styled.strong`
`

export default function App() {
    const [profile, setProfile] = useState([]);
    const pegarProfile = (id) => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael/person/`)
        .then((res) => {
            setProfile(res.data.profile);
            console.log("funcionou");
        })
        .catch((error) => {
            console.log(error.message);
        });
    };
    useEffect(() => {
        pegarProfile();
    }, []);
    return (
        //style={{backgroundImage: `url(${profile.photo})`}}
        <Content>
            <>
                <img src={profile.photo} alt="user"/>
                <A>{`${profile.name}, ${profile.age}`}</A>
                {/* <img width='150' height='200' alt='photo' src={profile.photo}></img> */}
                <p>{profile.bio}</p>
            </>
        </Content>
        
    )
}