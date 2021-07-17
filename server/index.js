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

/**
 * POST insere um todo no banco;
 */
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        pool.query("SET TIMEZONE TO 'America/Bahia';");
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *;", [description]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

/**
 * GET ALL TODO
 * Retornar todas as tarefas;
 */
app.get("/todos", async (_, res) => {

    try {
        const allTodos = await pool.query("SELECT * FROM todo;");
        res.json(allTodos.rows);
    } catch (error) {
        res.json(error);
        console.error(error.message);
    }
});
/**
 *  GET A TODO
 * retornar uma tarefa específico;
 */
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const oneTodo = await pool.query(`SELECT * FROM todo WHERE todo_id = ${id};`);
        res.json(oneTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

/**
 * UPDATE a todo
 * Atualiza um todo específico;
 */
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query(`UPDATE todo SET description = '${description}', criadoem = NOW() WHERE todo_id = ${id} RETURNING *;`
        );
        res.json(updateTodo.rows);
    } catch (error) {
        console.error(error.message);
    }
});
/**
 * DELETE deleta um todo
 */
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(`DELETE FROM todo  WHERE todo_id = ${id} RETURNING *;`);
        res.json(deleteTodo.rows);

    } catch (error) {
        console.error(error.message);
    }
});

app.listen(PORT, _ => {
    console.log(`Servidor iniciado porta: ${PORT}`);
});