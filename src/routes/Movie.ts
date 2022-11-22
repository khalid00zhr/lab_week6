import  express  from "express";
import validate from "../middleware/validate";
import { MovieSchemaType,movieSchema  } from "../zod_schema/movie_schema";

const router = express.Router();
let movie : MovieSchemaType[]=[];
movie.push({
    id:"100000",
    name:"movie1",
    genre:"Action",
    rating: 4,
    duration: 75
})

router.get('/', (req, res) => {
    return res.json(movie);
  });
  router.post('/',validate(movieSchema), (req, res) => {
    const newpark = req.body as MovieSchemaType;
  
    movie.push(newpark);
    return res.status(201).json({ message: 'movie Added !' });
  });

  router.put('/:id',validate(movieSchema), (req, res) => {
    const updated = req.body as MovieSchemaType;
    const { id } = req.params;
  
    const updatedList = movie.filter((movi) => {
      return movi.id !== id;
    });
  
    updatedList.push(updated);
  
    movie = updatedList;
  
    return res.json({
      message: 'movie updated !',
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    const newList = movie.filter((movi) => {
      return movi.id !== id;
    });
  
    movie = newList;
  
    return res.json({
      message: 'movie deleted !',
    });
  });
  router.get('/:name', (req, res) => {

    const n = movie.find((x) => x.name === req.params.name);
    res.json(n);

   
  });
  router.get('/:genre', (req, res) => {
 
    const g = movie.find((x) => x.genre === req.params.genre);
    res.json(g);

  })


  export default router;