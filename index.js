const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const app = express();
const api = require('./routes/API')

app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ "extended" : false}));

app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

// defining PORT number
const PORT = 5000 || process.env.PORT;

//routes for API
app.use('/api', api);

// Listening for Requests
app.listen(PORT,() => {
    console.log(`Server Running on ${PORT}`)
})

