import 'dotenv/config'
import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { routes } from './routes/routes';


const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(routes);

export {app};