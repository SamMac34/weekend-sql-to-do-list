const express = require('express');
const router = express.Router();

// Remove this if uneeded:
const pg =require('pg');
const pool = require('../modules/pool');


// GET all tasks
// router.get('/', (req, res) => {
//     let queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
//     pool.query(queryText).then(result => {
//         res.send(result.rows);
//     })
// })

// POST new task

// PUT update task to completed

// DELETE a task


module.exports = router;