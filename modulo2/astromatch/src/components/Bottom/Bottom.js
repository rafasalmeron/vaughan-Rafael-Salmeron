import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Selection = styled.div`
    margin: 5px solid black;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
`




export default function App() {
    const [match, setMatch] = useState([]);


    return (
        <Selection>
            <div>
            <button>X</button>
            </div>
            
            <div>
            <button>V</button>
            </div>
            
        </Selection>
    )
}