"use strict";

var express = require('express');

var app = express();
v;
app.get('/', function (req, res) {
  res.send('welcome to express');
});
app.listen(300, function () {
  console.log('server is running in port 3001');
}); // app.get('/loginuser',function(req,res){
//     var uname=req.query.username;
//     var ucity=req.query.city;
//     var newuser={username:uname,ciyt:ucity}
//     res.send(newuser)
// })

/* /show
/search/author searchibng the other app (query)
/search/:author (params)

/search?choice=kathy
/search
*/