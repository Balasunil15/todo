const express = require('express');
require('./db/mongo'); // Import the MongoDB connection
const todoRouter = require('./routes/todo');

const app = express();
const port = 3000;
app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/todo', todoRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

