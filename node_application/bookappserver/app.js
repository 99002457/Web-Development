var express= require('express');
var app= express();
var bookList= require('./books.json')

var cors = function(req, res, next) { 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    next(); 
} 
app.use(cors);


app.get("/showAll",function(req,res){
    res.status(200).send(bookList)
})

app.get("/showByAuthor",function(req,res){
    var auth= req.query.author;
    var newBooklist=[];
    bookList.forEach(book => {
        if(book.Author==auth)
        {
            newBooklist.push(book)
        }
    });
    res.status(200).send(newBooklist);
})
app.get("/showByCategory",function(req,res){
    var cat= req.query.category;
    var newBooklist=[];
    bookList.forEach(book => {
        if(book.category==cat)
        {
            newBooklist.push(book)
        }
    });
    res.status(200).send(newBooklist);
})
app.listen(3004,function(){
    console.log("Server started in the post 3002")
})