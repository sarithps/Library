const express = require('express');
const { Mongoose } = require('mongoose');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

// var books = [
//     {
//     title:'100 years of solitude',
//     author: 'Garcia Marques',
//     genre: 'Magical realism',
//     img: '100yrs.jpg'
//     },
//     {
//         title:'The Jungle Book',
//         author: 'Rudyard Kipling',
//         genre: 'Fiction',
//         img: 'junglebook.jpg'
//     },
//     {
//         title:'Sapiens',
//         author: 'Yuval Noah Harari',
//         genre: 'Non-fiction',
//         img: 'sapiens.jpg'
//     }
// ]

booksRouter.get('/', function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render('books',{
            nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
            title:'Library',
            books
        });
    })

});

booksRouter.get('/:i', function(req,res){
    const id = req.params.i
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('book',{
            nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
            title:'Library',
            book
        })
    })

});

booksRouter.get('/delete/:i', function(req,res){
    const id = req.params.i
    Bookdata.deleteOne({_id:id})
    .then(function(){
        res.redirect('/books');
    })

});

booksRouter.post('/update/:i', function(req,res){
    var id = req.params.i
    var item = { $set : req.body }
    Bookdata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/books');
        }
    });
});

module.exports = booksRouter;