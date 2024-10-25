const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    origin: true, // Allows requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allows cookies if needed
}));

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, this is a JSON response!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

