const express = require('express');
const homeRouter = express.Router();


homeRouter.get('/', function(req,res){
    res.render('home',{
        nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
        title:'Library'
    });
});

module.exports = homeRouter;