import express from 'express';
import cors from 'cors';
import { Products, products } from './data';


const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).send(products)
});

app.post('/', (req, res) => {
    const  id = Math.floor(Date.now() * Math.random()).toString(36)
    const  name = req.body.name
    const  price = req.body.price
    
    const newProducts = {
        id: id,
        name: name,
        price: price
    }
    products.push(newProducts)
    
    res.status(200).send(products)
})

app.put('/:id', (req, res) => {
    const newPrice = req.body.price
    const id = req.params.id
    
    products.forEach((p) => {
        if(id === p.id) {
            p.price = newPrice
        }
    })
    res.status(200).send(products)
})

app.delete('/:id', (req, res) => {
    const id = req.params.id

    const filteredProducts = products.filter((p) => {
        if(id != p.id){
            return p
        }
    })
    res.status(200).send(filteredProducts)
})


app.listen(3003, () => {
    console.log("Server rodando na porta 3003!");
});