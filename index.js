const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ToDo List (In-Memory)
let tasks = [];

// Routes
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  tasks[taskId] = updatedTask;
  res.json(updatedTask);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks.splice(taskId, 1);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function startServer() {
    if (!server) {
      server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    }
  }
  
  function stopServer() {
    if (server) {
      server.close();
      server = null;
    }
  }
module.exports = { app, startServer, stopServer };
