import express, {Express, Request, Response} from 'express'
import { AddressInfo } from "net";
import cors from 'cors'
import connection from './connection';

const app: Express = express();

app.use(express.json());
app.use(cors());

//CRIAR ATOR
const createActor = async (
   name: string,
   salary: number,
   dateOfbirth: string,
   gender: string
): Promise<any> => {
   await connection
      .insert({
         id: Date.now().toString(),
         name: name,
         salary: salary,
         birth_date: dateOfbirth,
         gender: gender
      })
      .into("Actor")
}
//CRIAR FILME
const createMovie = async (
   id: string,
   title: string,
   synopsis: string,
   releaseDate: Date,
   rating: number
 ) => {
   await connection
     .insert({
       id: id,
       titulo: title,
       sinopse: synopsis,
       data_de_lancamento: releaseDate,
       avaliacao: rating,
     })
     .into("Movie");
 }
//FUNÇÕES
const getActorById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
   `)
   return result[0][0]
}
const searchActor = async (name: string): Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
   `)
   return result
}
const searchMovie = async (query: string): Promise<any> => {
   const result = await connection.raw(`
   SELECT * FROM Movie
   WHERE (titulo LIKE "%${query}%" OR sinopse LIKE "%${query}%")
   ORDER BY data_de_lancamento asc;
   `)
   return result[0]
}
const countActors = async (gender: string): Promise<any> => {
   const result = await connection.raw(`
   SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`)
   const count = result[0][0].count
   return count
}
const updateSalary = async (id: string, salary: number): Promise<any> => {
   await connection("Actor")
     .update({
       salary: salary,
     })
     .where("id", id)
 }
 const deleteActor = async (id: string): Promise<void> => {
   await connection("Actor")
     .delete()
     .where("id", id)
 }
 const avgSalary = async (gender: string): Promise<any> => {
   const result = await connection("Actor")
     .avg("salary as average")
     .where({ gender })
 
   return result[0].average
 }
 const getAllMovies = async (): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Movie LIMIT 15
   `)
 
   return result[0];
 }

//ENDPOINTS
app.get("/actor/:id", async (req: Request, res: Response): Promise<void> => {
      try {
         const id = req.params.id
         const actor = await getActorById(id)

         res.status(200).send(actor)
      } catch (error: any) {
         console.log(error.message)
         res.status(400).send({message: error.message})
      }
})
app.get("/actor", async (req: Request, res: Response) => {
   try {
      const count = await countActors(req.query.gender as string)

      res.status(200).send({quantity: count})
   } catch (error: any) {
      res.status(400).send({message: error.message})
   }
})
app.post("/actor", async (req: Request, res: Response) => {
   try {
      await createActor(
         req.body.name,
         req.body.salary,         
         req.body.dateOfbirth,
         req.body.gender,
      )
      res.status(201).send('Criado')
   } catch (error: any) {
      res.status(400).send({message: error.message})
   }
})
app.put("/actor/:id", async (req: Request, res: Response) => {
   try {
     const id = req.params.id
     await updateSalary(id, req.body.salary);
     res.status(200).send({
       message: "Success",
     })
   } catch (error: any) {
     res.status(400).send({
       message: error.message,
     })
   }
 })
 app.delete("/actor/:id", async (req: Request, res: Response) => {
   try {
     await deleteActor(req.params.id);
     res.status(200).send({ message: "F"})
   } catch (err: any) {
     res.status(400).send({
       message: err.message,
     })
   }
 })
 app.post("/movie", async (req: Request, res: Response) => {
   try {
     await createMovie(
       req.body.id,
       req.body.title,
       req.body.synopsis,
       req.body.releaseDate,
       req.body.rating
     )
 
     res.status(200).send({
       message: "Success"
     })
   } catch (err: any) {
     res.status(400).send({
       message: err.message,
     })
   }
 })
 app.post("/movie/:id", async (req: Request, res: Response) => {
   try {
     const movies = await getAllMovies();
 
     res.status(200).send({
       movies: movies,
     });
   } catch (err: any) {
     res.status(400).send({
       message: err.message,
     })
   }
 })
 //BUSCA UM FILME PELA QUERY
 app.get("/movie/search", async (req: Request, res: Response) => {
   try {
     const movies = await searchMovie(req.query.query as string);
 
     res.status(200).send({
       movies: movies,
     });
   } catch (err:any) {
     res.status(400).send({
       message: err.message,
     });
   }
 });
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});