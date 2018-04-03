const app = require('express')(),
  config = require('config'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  passportService = require('./services/passport'),
  passport = require('passport'),
  fileUpload = require('express-fileupload');

const index = require('./routes/index'),
  users = require('./routes/users'),
  cart = require('./routes/cart'),
  products = require('./routes/products'),
  scenes = require('./routes/scenes'),
  projects = require('./routes/projects');

const port = config.server.port || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(morgan('combined'));

mongoose.Promise = global.Promise;
const db = mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`);

const v1 = '/api/v1';
app.use(v1, index);
app.use(v1 + '/users', users);
app.use(v1 + '/cart', cart);
app.use(v1 + '/products', products);
app.use(v1 + '/scenes', scenes);
app.use(v1 + '/projects', projects);

app.listen(port, () => {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  console.log('server listening on port', port);
  console.log('Connecting to: ', `mongodb://${config.db.host}/${config.db.name}`);
});