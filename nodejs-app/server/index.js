const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));

//Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Set static public data
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',require('./routes/app'));


// Default response for any other request
app.use(function(req, res){
  res.status(404).render('404');
});

const port = process.env.PORT || 3000;

app.listen(port,function(){
  console.log(`server started at port ${port}`);
});
