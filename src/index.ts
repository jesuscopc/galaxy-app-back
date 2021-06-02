const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/api/topsecret', require('./routes/topsecret'));
app.use('/api/topsecret_split', require('./routes/topsecret_split'));

//CORS dont do this in a production environemtn
app.use(function(req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*"); // use only to develop enviroment
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS");
  res.header("X-Frame-Options", "SAMEORIGIN");
  next();
});
// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
