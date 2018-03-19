const app = require('express')(),
  config = require('config'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

const index = require('./routes/index'),
  user = require('./routes/user');

const port = config.server.port || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
const db = mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`);

app.use('/api/v1', index);
app.use('/api/v1/user', user);

app.listen(port, () => {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  console.log('server listening on port', port);
  console.log('Connecting to: ', `mongodb://${config.db.host}/${config.db.name}`);
});