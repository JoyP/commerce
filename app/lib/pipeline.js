'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('express-method-override');
var home = require('../controller/home');
var items = require('../controller/items');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../static'));
  app.use(bodyParser.urlencoded({extended:true})); // puts form information into req.body
  app.use(methodOverride());

  app.get('/', home.index);
  app.get('/about', home.about);
  app.get('/faq', home.faq);

  app.get('/items/new', items.init);
  app.post('/items', items.create);
  app.get('/items', items.index);
  app.get('/items/:id', items.show);
  app.delete('/items/:id',items.destroy);

  console.log('Pipeline Configured');
};
