import express from 'express';
import cors from 'cors'

type User = {
        id: string,
        name: string,
        phone: string,
        email: string,
        website: string
        //Criei aqui dentro, para ter a experiência de fluxo.
        //Acredito que pode facilitar de alguma forma (ou não), vamos ver.
        //Apesar que de fazer mais sentido ser algo separado
        posts:{
            id: string,
            title: string,
            body: string,
            userId: string
        }
    }

var users : User[] = [
    {
        id: '001',
        name: 'Rafael',
        phone: '(21) 98067-9231',
        email: 'rafasalmeronjr@gmail.com',
        website: 'https://github.com/rafasalmeron',
        posts:{
            id: 'string',
            title: 'string',
            body: 'string',
            userId: 'string'
        }
    },
    {
        id: '002',
        name: 'Rafael',
        phone: '(21) 98067-9231',
        email: 'rafasalmeronjr@gmail.com',
        website: 'https://github.com/rafasalmeron',
        posts:{
            id: 'string',
            title: 'string',
            body: 'string',
            userId: 'string'
        }
    },
    {
        id: '003',
        name: 'Rafael',
        phone: '(21) 98067-9231',
        email: 'rafasalmeronjr@gmail.com',
        website: 'https://github.com/rafasalmeron',
        posts:{
            id: 'string',
            title: 'string',
            body: 'string',
            userId: 'string'
        }
    },

]

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
    const usersList = users.map((u)=>{
        return {
            id: u.id,
            name: u.name,
            phone: u.phone,
            email: u.email,
            website: u.website
        }
    })
    res.status(200).send(usersList)
})
app.get("/posts", (req, res) => { 
    const posts = users.map((u)=>{
        return {
            userId: u.id,
            id: u.posts.id,
            title: u.posts.title,
            body: u.posts.body
        }
    })
    res.status(200).send(posts)
})
app.get('/posts/:userId', (req, res) => {
    const userId = req.params.userId; 
    //NÃO DEU TEMPO DE PENSAR EM UMA MELHOR SOLUÇÃO ATÉ O MOMENTO
    //PRECISO IR TRABALHAR
    const postUser = users.map((u)=>{
        if(u.id === userId){
            return {
                userId: u.id,
                id: u.posts.id,
                title: u.posts.title,
                body: u.posts.body
            }
        }
        else {
            return null
                
        }
        
    })
    res.status(200).send(postUser)
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});