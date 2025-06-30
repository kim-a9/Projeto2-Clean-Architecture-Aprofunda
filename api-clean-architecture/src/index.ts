import express, { Application } from 'express';
import cors from 'cors';
import router from './routes/library-routes';

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT, () => console.log('Servidor rodando em http://localhost:3000'));

