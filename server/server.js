const express = require('express');
const bodyParser = require('body-parser');
// Changed taskRouter to router
const taskRouter = require('./routes/task.router.js');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/routes/task.router', taskRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});