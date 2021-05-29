const express = require('express');
const signupRouter = express.Router();


function Router(nav){


    
    signupRouter.get('/',function(req,res){
        res.render('signup',
        {
            nav,
        title:'Library',
        
        });
    });
    signupRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('signup',
        {
            nav,
        title:'Library',
       
        });
    });
    return signupRouter
}
module.exports = Router;

