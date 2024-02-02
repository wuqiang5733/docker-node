const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const dataFolder = 'data'; // Define the data folder path
const csvFilePath = `${dataFolder}/users.csv`; // Define the CSV file path

// Utility function to ensure the data folder exists
const ensureDataFolderExists = () => {
    if (!fs.existsSync(dataFolder)) {
        fs.mkdirSync(dataFolder);
    }
};

// Utility function to read users from the CSV file
const readUsers = () => {
    ensureDataFolderExists(); // Ensure the data folder exists
    try {
        const data = fs.readFileSync(csvFilePath, 'utf8');
        return data.split('\n').map(line => {
            const [id, name, email] = line.split(',');
            return { id, name, email };
        }).filter(user => user.id); // Filter out any empty lines
    } catch (error) {
        // If there's an error (e.g., the file doesn't exist), return an empty array
        return [];
    }
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
    ensureDataFolderExists(); // Ensure the data folder exists
    const csvContent = users.map(user => `${user.id},${user.name},${user.email}`).join('\n');
    fs.writeFileSync(csvFilePath, csvContent, 'utf8');
    res.json(users); // Return the posted data
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
