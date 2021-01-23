const express = require('express');
const updateRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');

updateRouter.get('/book/:i', function(req,res){
    const id = req.params.i;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('bookupdate',{
            nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
            title:'Library',
            book,
            id
        })
    })
})

updateRouter.get('/author/:i', function(req,res){
    const id = req.params.i;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render('authorupdate',{
            nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
            title:'Library',
            author,
            id
        })
    })
})

module.exports = updateRouter;