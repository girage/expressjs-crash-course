const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const restaurantsRouter = require('./routes/restaurants');
const indexRouter  = require('./routes')
const logger = require('./middleware/logger');
const PORT = process.env.PORT || 3000;
const app = express();

// Template engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Custom middleware
app.use(logger);

// Routes
app.use('/apis/restaurants', restaurantsRouter);
app.use('/', indexRouter);


app.listen(PORT, () => {
  console.log('listening to port 3000');
});