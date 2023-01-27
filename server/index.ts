
import express, {Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './utils/Database';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

app.listen(process.env.PORT, () => {
  connectToDatabase().then(_res => {
    console.log(`Server started on port = ${process.env.PORT}`);
  })
  .catch(error => {
    console.log(`Error occurred while connecting to database.`);
    console.trace(error);
  });
});

