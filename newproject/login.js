var express=require('express')
var app=express();
var bookList=require('./books.json')

app.get('/',function(req,res){

    res.send('welcome to express')
    
});

app.listen(3002,function(){
    console.log('server is running in port 3001');  
})

app.get('/loginuser',function(req,res){
    var uname=req.query.username;
    var ucity=req.query.city;
    var newuser={username:uname,ciyt:ucity}
    res.send(newuser)
    
})
// http://localhost:3002/loginuser?username=chethan&city=bangalore


//http://localhost:3002/search/innova/
app.get('/search/:choice',function(req,res){
    var cab= req.params.choice;
    res.send('your car choice is '+ cab)
})

// http://localhost:3002/searchCab/innova/ac
app.get('/searchCab/:choice/:type',function(req,res){
    var cab=req.params.choice;
    var cabtype=req.params.type;
    res.send("your car is "+cab+" "+cabtype);
})

app.get('/searchCabs/:choice/:type',function(req,res){
    var cab=req.params;
    res.send(cab);
})
app.get('/showBooks',function(req,res){
    res.send(bookList)
    })