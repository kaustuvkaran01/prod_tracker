const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(express.json());

connectDB();


app.use("/api/auth",require('./routes/api/auth'));
app.use("/api/users",require('./routes/api/user'));


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server stared on port : ${PORT}`));