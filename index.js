const app = require('express')();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send("Hello, world"));

app.listen(3000, () => console.log('server listening on port ', port));