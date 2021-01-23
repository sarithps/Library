const express = require('express');
const nuserRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');

nuserRouter.get('/', function(req,res){
    res.render('home',{
        nav:[{link:'/nuser/books',name:'Books'}, {link:'/nuser/authors', name:'Authors'},{link:'/',name:'Sign Out'} ],
        title:'Library'
    });
});

nuserRouter.get('/books', function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render('nbooks',{
            nav:[{link:'/nuser/books',name:'Books'}, {link:'/nuser/authors', name:'Authors'},{link:'/',name:'Sign Out'} ],
            title:'Library',
            books
        });
    })

});

nuserRouter.get('/authors', function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render('nauthors',{
            nav:[{link:'/nuser/books',name:'Books'}, {link:'/nuser/authors', name:'Authors'},{link:'/',name:'Sign Out'} ],
            title:'Library',
            authors
        });
    })

});

module.exports = nuserRouter;