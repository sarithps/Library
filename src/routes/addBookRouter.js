const express = require('express');
const addBookRouter = express.Router();
const Bookdata = require('../model/Bookdata');


addBookRouter.get('/', function(req,res){
    res.render('addbook',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library'
    });
});

addBookRouter.post('/add', function(req,res){
    var item = {
        BookName: req.body.bookname,
        Author: req.body.author,
        Genre: req.body.genre,
        Cover: req.body.cover
    }
    var book = Bookdata(item);
    book.save();
    res.redirect('/books');
});


module.exports = addBookRouter;