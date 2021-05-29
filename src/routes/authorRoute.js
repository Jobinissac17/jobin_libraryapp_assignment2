
const express = require('express');
const authorRouter = express.Router();

function Router(nav){

var authors =[
    {
        title:'J K Rowling',
        img:'/JK.jpg'
        
    },
    {
        title:'Antoine de Saint-Exupéry',
        img:'/antoine.jpg'
        
    },
    {
        title:'Paulo Coelho',
        img:'/paulo.jpg'
        
    },
    {
        title:'Markus Zusak',
        img:'/markus.jpg'
        
    }
]

authorRouter.get('/',function(req,res){
    res.render('authors',
    {
        nav,
    title:'Library',
    authors
    });
});
authorRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('authors',
    {
        nav,
    title:'Library',
   
    });
});
return authorRouter
}
module.exports = Router;