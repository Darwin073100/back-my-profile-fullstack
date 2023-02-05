const express = require('express');
const { config } = require('./config');

const app = express();
const port = config.port;

app.get('/',(req, res)=>{
    res.send('Hola');
});

app.listen(port, ()=> console.log('Port: ' + port));
