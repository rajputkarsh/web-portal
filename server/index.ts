
import express, {Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './src/utils/database';
import { addSwagger } from './src/utils/swagger';
import router from './src/routes';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/', router);

app.listen(process.env.PORT, async () => {
  try{
    await connectToDatabase();
    console.log(`Server started on port = ${process.env.PORT}`);
  }
  catch(error) {
    console.log(`Error occurred while connecting to database.`);
    console.trace(error);
  };
});

