const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./config/db.js');
const UserRoutes = require('./routes/userRoutes.js');
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');
const web3 = require("./config/web3.js");
const cors = require("cors")

dotenv.config();
connectdb();
const provider = web3()
const port = process.env.PORT;

const app = express();
app.use(cors())
app.set('provider', provider);

app.get('/', (req,res)=>{
    res.send('API is running...');
})

app.use('/api/users', UserRoutes)

// below are the default function used for errorHandling
app.use(notFound)
app.use(errorHandler)


app.listen(port, () => console.log(`server running on port ${port}`))