import express from 'express'
import rethinkersRoute from './routes/rethinkersRoute';
import cors from 'cors';

const app = express()
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(cors());

app.use('/', rethinkersRoute);

const port = 8080
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})