import express from 'express';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


dotenv.config()
connectdb();
const port = 5000;

const app = express();

app.get('/', (req,res)=>{
    res.send('API is running...');
})

app.use('/api/products', productRoutes)

// below are the default function used for errorHandling
app.use(notFound)
app.use(errorHandler)


app.listen(port, () => console.log(`server running on port ${port}`))