var express = require('express');
var app = express();
var port = process.env.PORT || 8080
var loginController = require('./controller/loginController');
app.set('view engine','ejs');
app.use(express.static('./public'));
loginController(app);
app.listen(8080 , function(){
    console.log("application running")
});
