import express, { Application } from 'express';
import cors from 'cors';
// import textRoutes from '/routes/text-routes';

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// app.use(textRoutes);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
});


