const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Coming soon!'));
app.get('/api', (req, res) => res.send('API also coming soon!'));


app.listen(PORT);