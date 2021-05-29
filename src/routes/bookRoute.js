
const express = require('express');
const booksRouter = express.Router();

function Router(nav){

var books =[
    {
        title:'Harry Potter and the Philosophers Stone',
        author:'J K Rowling',
        gener:'Fantasy',
        img:'/harry.jpg'
        
    },
    {
        title:'The Little Prince',
        author:' Antoine de Saint-Exupéry',
        gener:'Novel',
        img:'/Littleprince.jpg'
        
    },
    {
        title:'The Alchemist',
        author:' Paulo Coelho',
        gener:'Fantasy',
        img:'/TheAlchemist.jpg'
        
    },
    {
        title:'The Book Thief',
        author:' Markus Zusak',
        gener:'Novel',
        img:'/bookTheif.jpg'
        
    }
]

booksRouter.get('/',function(req,res){
    res.render('books',
    {
        nav,
    title:'Library',
    books
    });
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',
    {
        nav,
    title:'Library',
    book:books[id]
    });
});
return booksRouter
}
module.exports = Router;