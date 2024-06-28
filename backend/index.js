var express = require('express'); 
var bodyParser = require('body-parser'); 
const {realizarQuery} = require ('./mysql')
var cors = require("cors");

var app = express(); 
var port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'GET Home route working fine!'
    });
});
