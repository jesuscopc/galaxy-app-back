const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

let whitelist = ['http://localhost:4000', 'http://abc.com']

//CORS dont do this in a production environemtn
app.use(cors({
  origin: 'https://galaxy-app-back-4saf8.ondigitalocean.app'
}));  

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
// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
