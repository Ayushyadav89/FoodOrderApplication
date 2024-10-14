const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Static files middleware
app.use('/image', express.static(path.join(__dirname, 'image')));
app.use('/order', express.static(path.join(__dirname, 'order')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'public')));


// Routes for serving HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.get('/order', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'order.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/card', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'card.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
