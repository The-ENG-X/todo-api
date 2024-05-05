const request = require('supertest');
const app = require('./index');

describe('Todo API endpoints', () => {
  it('should create a new task', createTaskTest);
  it('should retrieve tasks', retrieveTasksTest);
  it('should update an existing task', updateTaskTest);
  it('should delete an existing task', deleteTaskTest);
});

async function createTaskTest() {
  const res = await request(app)
    .post('/tasks')
    .send({ title: 'Task 1', completed: false });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty('id');
}

async function retrieveTasksTest() {
  const res = await request(app).get('/tasks');
  
  expect(res.statusCode).toEqual(200);
  expect(Array.isArray(res.body)).toBeTruthy();
}

async function updateTaskTest() {
  const res = await request(app)
    .put('/tasks/1')
    .send({ title: 'Updated Task 1', completed: true });

  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty('title', 'Updated Task 1');
  expect(res.body).toHaveProperty('completed', true);
}

async function deleteTaskTest() {
  const res = await request(app).delete('/tasks/1');

  expect(res.statusCode).toEqual(204);
}
