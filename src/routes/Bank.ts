import  express  from "express";
import validate from "../middleware/validate";
import { bankSchemaType,  bankSchema} from "../zod_schema/bank_schema";

const router = express.Router();
let bank : bankSchemaType[]=[];
bank.push({
    id:"100060",
    username:"khalid00",
    password:"Cs12345678@",
    balance: 1000

})

router.get('/', (req, res) => {
    return res.json(bank);
  });
  router.post('/',validate(bankSchema), (req, res) => {
    const newpark = req.body as bankSchemaType;
  
    bank.push(newpark);
    return res.status(201).json({ message: 'student Added !' });
  });

  router.put('/:id',validate(bankSchema), (req, res) => {
    const updated = req.body as bankSchemaType;
    const { id } = req.params;
  
    const updatedList = bank.filter((ban) => {
      return ban.id !== id;
    });
  
    updatedList.push(updated);
  
    bank = updatedList;
  
    return res.json({
      message: 'student updated !',
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    const newList = bank.filter((ban) => {
      return ban.id !== id;
    });
  
    bank = newList;
  
    return res.json({
      message: 'student deleted !',
    });
  });
  
  


export default router