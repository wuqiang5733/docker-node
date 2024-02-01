const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Utility function to read users from the CSV file
const readUsers = () => {
    const data = fs.readFileSync('users.csv', 'utf8');
    return data.split('\n').map(line => {
        const [id, name, email] = line.split(',');
        return { id, name, email };
    }).filter(user => user.id); // Filter out any empty lines
};

// GET /users - Return all users
app.get('/users', (req, res) => {
    const users = readUsers();
    res.json(users);
});

// GET /users/:id - Return a specific user by ID
app.get('/users/:id', (req, res) => {
    const users = readUsers();
    const user = users.find(u => u.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// POST /user - Save users to the CSV file
app.post('/user', (req, res) => {
    const users = req.body; // Assuming the body is an array of user objects
    const csvContent = users.map(user => `${user.id},${user.name},${user.email}`).join('\n');
    fs.writeFileSync('users.csv', csvContent, 'utf8');
    res.send('Users saved');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
