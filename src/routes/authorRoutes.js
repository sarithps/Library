const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../model/Authordata');

// var authors = [
//     {
//     name: 'Garcia Marques',
//     books:'100 years of solitude',
//     country: 'Colombia',
//     img: 'Gabriel.jpg'
//     },
//     {
//         name: 'J.K Rowling',
//         books:'Harry Potter',
//         country: 'UK',
//         img: 'jk.jpg'
//     },
//     {
//         name: 'Rudyard Kipling',
//         books:'The Jungle Book',
//         country: 'India',
//         img: 'rk.jpg'
//     }
// ]

authorRouter.get('/', function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render('authors',{
            nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
            title:'Library',
            authors
        });
    })

});

authorRouter.get('/:i', function(req,res){
    const id = req.params.i
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render('author',{
            nav:[{link:'/books',name:'Books'}, {link:'/authors', name:'Authors'},{link:'/addbook', name:'Add book'},{link:'/addauthor', name:'Add author'},{link:'/',name:'Sign Out'} ],
            title:'Library',
            author
        })
    })

});

authorRouter.get('/delete/:i', function(req,res){
    const id = req.params.i
    Authordata.deleteOne({_id:id})
    .then(function(){
        res.redirect('/authors');
    })

});

authorRouter.post('/update/:i', function(req,res){
    var id = req.params.i
    var item = { $set : req.body }
    Authordata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/authors');
        }
    });
});

module.exports = authorRouter;