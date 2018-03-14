const app = require('express')();

app.get('/', (req, res) => res.send("Hello, world"));

app.listen(3000, ()=>console.log('server listening on port 3000'));