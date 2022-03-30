import express from "express";
import cors from "cors";
import { users } from './data';


const app = express();
app.use(cors);
app.use(express.json());



app.get("/playlists", (req, res) => {
    const allUsers = users;

    const playlists = allUsers.map((user) => {
        return user.playlists;
    });

    const resultPlaylists = playlists.flat(1) // flat(profundidade da busca)
    // [1,[2,3], 4] -> flat(1) -> [1,2,3,4]

    res.status(200).send(resultPlaylists);
});




app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});