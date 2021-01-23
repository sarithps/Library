const express = require('express');
const addAuthorRouter = express.Router();
const Authordata = require('../model/Authordata');


addAuthorRouter.get('/', function(req,res){
    res.render('addauthor',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library'
    });
});

addAuthorRouter.post('/add', function(req,res){
    var item = {
        name: req.body.name,
        books: req.body.books,
        country: req.body.country,
        img: req.body.img
    }
    var book = Authordata(item);
    book.save();
    res.redirect('/authors');
})

module.exports = addAuthorRouter;