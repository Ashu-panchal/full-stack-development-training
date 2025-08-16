// Import express (ES module syntax)
import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Test API
app.get('/test', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`);
    res.send("api is working");
});


// API 1 - Create todo
app.post('/insert-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`);
    res.send("todo created successfully");
});



// API 2 - Read a single todo
app.get('/read-one-todo', (req, res) => {
    console.log(`read todo with id = ${req.query.id}`);
    let todoObj = {
        id: 1,
        name: "ram",
        rollNo: 123
    };
    res.json(todoObj);
});


// API 3 - Read all todos
app.get('/read-many-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`);
    let todoArr = [
        { id: 1, name: "ram", rollNo: 123 },
        { id: 2, name: "shyam", rollNo: 456 }
    ];
    res.json(todoArr);
});


// API 4 - Update todo
app.patch('/update-todo', (req, res) => {
    console.log(`todo id = ${req.query.id}`);
    console.log(`update data = ${JSON.stringify(req.body)}`);
    res.send("todo updated successfully");
});



// API 5 - Delete todo
app.delete('/delete-todo', (req, res) => {
    console.log(`delete todo with id = ${req.query.id}`);
    res.send("todo deleted successfully");
});


// Start server
app.listen(port, () => {
    console.log(`my server is running at ${port}`);
});
