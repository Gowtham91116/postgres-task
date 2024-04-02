const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get((req,res)=>{
    res.send('Hellow world');
})

require('./src/router/baseRouter')(app);
require('./config/db')

module.exports = app;