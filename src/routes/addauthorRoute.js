const express = require('express');
const addauthorRouter = express.Router();

function Router(nav){


    
    addauthorRouter.get('/',function(req,res){
        res.render('addauthor',
        {
            nav,
        title:'Library',
        
        });
    });
    addauthorRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('addauthor',
        {
            nav,
        title:'Library',
       
        });
    });
    return addauthorRouter
    }
    module.exports = Router;