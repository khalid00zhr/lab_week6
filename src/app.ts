import express from 'express';
import movieRouters from './routes/Movie';
import studentRouters from './routes/Student';

const app = express();

app.use(express.json());

app.use('/movie', movieRouters);
app.use('/student', studentRouters);

app.listen(5000);