const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const { todoListRouter } = require('./routes/todoList.route');
const { todoTaskRouter } = require('./routes/todoTask.route');
const { todoUserRouter } = require('./routes/todoUser.route');
const { healthRouter } = require('./routes/health.route');

env.config();
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use('/health', healthRouter);
app.use('/lists', todoListRouter);
app.use('/tasks', todoTaskRouter);
app.use('/users', todoUserRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
