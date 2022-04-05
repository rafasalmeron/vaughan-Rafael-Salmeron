import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {AddressInfo} from 'net';
enum Auth {
    Admin = "ADMIN", 
    Normal = "NORMAL"
};

type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number,
    
};

export let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: Auth.Admin,
        age: 12,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: Auth.Normal,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: Auth.Normal,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: Auth.Normal,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: Auth.Admin,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: Auth.Admin,
        age: 60
    }
];

const app: Express = express();
app.use(express.json());
app.use(cors());

//GET ALL USERS
app.get('/users', (req: Request, res: Response) =>
 {res.status(200).send(users)})
//GET USERS BY NAME
app.get('/users/:name', (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const name: string = req.params.name as string;
        const user: User | undefined = users.find((u) => u.name === name)
        if(!user){
            errorCode = 404
            throw new Error('User not Found')
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
});
//GET USER BY TYPE
app.get('/users/:type', (req: Request, res: Response) => {
    let errorCode: number = 400;
    const type: string = req.params.type;
    try {
        const filterUserByType = users.filter((u) => {
            return u.type.toLocaleLowerCase().includes(type)})
        res.status(200).send(filterUserByType);
    } catch (error: any) {
        res.status(errorCode).send({message: error.message});
    };
});
//CREATE A USER
app.post('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const { id, name, email, type, age } = req.body;
        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Check fields')
        }
        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send({ message: 'User created' })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}) 

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://lovalhost: ${address.port}`);
    } else {
        console.log('Failure upon starting server.')
    }
});