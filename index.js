const app = require('express')(),
  config = require('config');

const index = require('./routes/index');

const port = config.server.port || 3000;

app.use(index);

app.listen(port, () => {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  console.log('server listening on port ', port);
});