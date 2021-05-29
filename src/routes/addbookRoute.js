const express = require('express');
const addbookRouter = express.Router();

function Router(nav){


    
    addbookRouter.get('/',function(req,res){
        res.render('addbook',
        {
            nav,
        title:'Library',
        
        });
    });
    addbookRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('addbook',
        {
            nav,
        title:'Library',
       
        });
    });
    return addbookRouter
    }
    module.exports = Router;