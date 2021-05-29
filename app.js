const express = require('express');
const app = new express();
const port = process.env.PORT || 5000;

const nav = [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addbook',name:'Add Books'},
    {link:'/addauthor',name:'Add Author'},
    {link:'/login',name:'LogIn'},
    {link:'/signup',name:'SignUp'}
];


const booksRouter = require('./src/routes/bookRoute')(nav)
const authorRouter = require('./src/routes/authorRoute')(nav)
const addbookRouter = require('./src/routes/addbookRoute')(nav)
const addauthorRouter = require('./src/routes/addauthorRoute')(nav)
const signupRouter = require ('./src/routes/signupRoute')(nav)
const loginRouter = require('./src/routes/loginRoute')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",
    {
    nav,
    title:'Library'
    });
});


app.listen(port,()=>{
    console.log('server ready at' +port);
});