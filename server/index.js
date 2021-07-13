const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = 5000;

// minddleWare
app.use(cors());
app.use(express.json());


/**
 * Routes
 */


// GET ALL TODO

// GET A TODO

// UPDATE a todo

// DELETE A TODO

app.listen(PORT, _ => {
    console.log(`Servidor iniciado porta: ${PORT}`);
});