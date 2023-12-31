const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.router');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/tasks', taskRouter);

const PORT = 5000;


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});