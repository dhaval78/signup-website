var express = require('express');
var app = express();
var loginController = require('./controller/loginController');
app.set('view engine','ejs');
app.use(express.dynamic('./public'));
loginController(app);
app.listen(process.env.PORT || 5000,function(){
    console.log("application running");
});