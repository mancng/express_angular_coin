//Require Express
var express = require( 'express' );
var app = express();
var path = require('path');

//Get body-parser
var bodyParser = require( 'body-parser' );

//Other server configs
app.use(bodyParser.json());
app.use(express.static( __dirname + '/mainApp/dist'));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve( __dirname + "/mainApp/dist/index.html"))
})

//Listen to server
app.listen(8000, function(){
    console.log("Listening to 8000")
})