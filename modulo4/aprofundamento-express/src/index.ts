import express from "express";
import cors from 'cors'

type To_do = {
    userId: string | number | undefined,
    id: string | number,
    title: string,
    completed: boolean
}

var list_Todo: To_do[] = [
    {
        userId: 'Rafael-Vaughan',
        id: '1',
        title: 'Lavar o cabelo',
        completed: false
    },
    {
        userId: 'Rafael-Vaughan',
        id: '2',
        title: 'quis ut nam facilis et officia qui',
        completed: false
      },
      {
        userId: 'Labenu',
        id: '3',
        title: 'fugiat veniam minus',
        completed: false
      },
      {
        userId: 'Labenu',
        id: '4',
        title: 'et porro tempora',
        completed: true
      },
]

const app = express();
app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {   
    const todo = list_Todo.filter((list) => {
            return list.completed === false
    })
    res.status(200).send(todo)
})

app.post('/todos', (req, res) => {
    const user = req.headers.authorization
    const titleTodo = req.body.title

    const newTodo: To_do = {
        userId: user,
        id: Date.now(),
        title: titleTodo,
        completed: false
    }
    const createTodo = list_Todo.filter((todo) => {
        return todo.userId === user
    }).map(()=>{
        return [
            ...list_Todo,
                newTodo
        ]
    })
    res.send(createTodo)
})

app.put('/todos/:id', (req, res) => {
    const todoId = req.params.id

    const markDone = list_Todo.filter((todo) => {
        return todoId === todo.id
    }).map((todo) => {
        if(todo.completed === false){
            return {...todo, completed: true}
        } else return {...todo, completed: false}
    })

    res.send(markDone)    
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});