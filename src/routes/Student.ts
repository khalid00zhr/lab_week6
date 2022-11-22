import  express  from "express";
import validate from "../middleware/validate";
import { StudentSchemaType, studentSchema } from "../zod_schema/Student_schema";

const router = express.Router();
let student : StudentSchemaType[]=[];
student.push({
    id:"100060",
    name:"khalid",
    major:"CS",
    level: 4,
    gpa: 3
})

router.get('/', (req, res) => {
    return res.json(student);
  });
  router.post('/',validate(studentSchema), (req, res) => {
    const newpark = req.body as StudentSchemaType;
  
    student.push(newpark);
    return res.status(201).json({ message: 'student Added !' });
  });

  router.put('/:id',validate(studentSchema), (req, res) => {
    const updated = req.body as StudentSchemaType;
    const { id } = req.params;
  
    const updatedList = student.filter((studen) => {
      return studen.id !== id;
    });
  
    updatedList.push(updated);
  
    student = updatedList;
  
    return res.json({
      message: 'student updated !',
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    const newList = student.filter((studen) => {
      return studen.id !== id;
    });
  
    student = newList;
  
    return res.json({
      message: 'student deleted !',
    });
  });
  router.get('/:major', (req, res) => {

    const s = student.find((x) => x.major === req.params.major);
    res.json(s);

   
  });
  
  


export default router