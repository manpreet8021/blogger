const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./config/db.js');
const productRoutes = require('./routes/productRoutes.js');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');


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