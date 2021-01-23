// library app
const express = require('express');
const app = express();
const booksRouter = require('./src/routes/bookRoutes');
const authorRouter = require('./src/routes/authorRoutes');
const signupRouter = require('./src/routes/signupRouter');
const loginRouter = require('./src/routes/loginRouter');
const homeRouter = require('./src/routes/homeRouter');
const addBookRouter = require('./src/routes/addBookRouter');
const addAuthorRouter = require('./src/routes/addAuthorRouter');
const updateRouter = require('./src/routes/updateRoutes');
const nuserRouter = require('./src/routes/nuserRoutes');
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.use('/books',booksRouter);

app.use('/authors',authorRouter);

app.use('/signup', signupRouter);

app.use('/login', loginRouter);

app.use('/home',homeRouter);

app.use('/addbook',addBookRouter);

app.use('/addauthor', addAuthorRouter);

app.use('/update', updateRouter);

app.use('/nuser', nuserRouter)

app.get('/', function(req,res){
    res.render('index', {
        nav:[{link:'/signup', name:'SignUp'},{link:'/login', name:'LogIn'} ],
        title:'Library'
    });
});

app.listen(port, () => {console.log("server ready at " + port)});