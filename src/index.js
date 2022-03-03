const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const { todoListRouter } = require('./routes/todoList.route');
const { todoTaskRouter } = require('./routes/todoTask.route');

env.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use('/lists', todoListRouter);
app.use('/tasks', todoTaskRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
