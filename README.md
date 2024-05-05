### Using cURL:

#### GET Request:
```bash
curl http://localhost:3000/tasks

#### POST Request:
curl -X POST -H "Content-Type: application/json" -d '{"task": "Do laundry"}' http://localhost:3000/tasks

#### PUT Request:
````Replace '<task_id>' with the actual ID of the task.
curl -X PUT -H "Content-Type: application/json" -d '{"task": "Do laundry and iron clothes"}' http://localhost:3000/tasks/'<task_id>'

#### PUT Request:
````Replace '<task_id>' with the actual ID of the task.
curl -X PUT -H "Content-Type: application/json" -d '{"task": "Do laundry and iron clothes"}' http://localhost:3000/tasks/'<task_id>'

#### DELETE Request:
Replace '<task_id>' with the actual ID of the task.
curl -X DELETE http://localhost:3000/tasks/'<task_id>'




