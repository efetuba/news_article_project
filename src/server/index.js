const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
var path = require('path');
const express = require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const mockAPIResponse = require('./mockAPI.js');
const app = express();
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port!')
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// POST route to API
app.post('/results', postToApi);
function postToApi(req, res) {
    console.log(req);
    let data=[];
    let form=req.body.url;
    textapi.sentiment({
       'url' : form,
       'mode' : 'document'
    }, 
    function(error, res) {
       if(error === null){
         data.text= res.text;
         data.polarity= res.polarity;
         data.polarity_confidence= res.polarity_confidence;
         res.send(data);
         console.log(data);
       }else{
        console.log("error");  
       } 
    }); 
}

  