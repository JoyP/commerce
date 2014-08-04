'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');
var home = require('../controller/home');
var items = require('../controller/items');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/', home.index);
  app.get('/about', home.about);
  app.get('/faq', home.faq);

  app.get('/items/new', items.init);
  app.post('/items', items.create);
  app.get('/items', items.index);

  console.log('Pipeline Configured');
};