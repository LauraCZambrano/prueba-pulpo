//import
import express, { json } from 'express';
import routes from './routes/index.js'

//initializations
const app = express();

//middlewares
app.use(json());

//routes
app.use(routes);

export default app;