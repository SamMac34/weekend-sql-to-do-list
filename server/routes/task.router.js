const express = require('express');
const router = express.Router();

// Remove this if uneeded:
const pg =require('pg');
const pool = require('../modules/pool');


// GET all tasks
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks";';
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error getting tasks', error);
        res.sendStatus(500);
    });
});

// POST new task to DB
router.post('/', (req, res) => {
    let newTask = req.body;
    console.log('Adding task', newTask);
    let queryText = `INSERT INTO "tasks" ("task", "dueDate", "completed")
                     VALUES ($1, $2, $3);`;
    pool.query(queryText, [newTask.task, newTask.dueDate, newTask.completed])
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error adding task', error);
        res.sendStatus(500)
    });
});

// PUT update task to completed

// DELETE a task
router.delete('/:id', (req, res) => {
    let idToDelete = req.params.id;
    let query = `DELETE FROM "tasks" WHERE id = $1;`;
    pool.query(query, [idToDelete])
      .then((results) => {
        console.log('Task deleted');
        res.sendStatus(200)
      }).catch((error) => {
        console.log('Error deleting task, error is: ', error);
        res.sendStatus(500)
      });
  });


module.exports = router;