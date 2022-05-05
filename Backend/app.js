var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const crypto = require('crypto');
var bcrypt = require('bcrypt');

require('dotenv').config();
const port = process.env.PORT
const uri = process.env.ATLAS_URI

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* MONGODB CONNECTION */
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log('MongoDB connected')
})


/* Routing */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');
var curiositeRouter = require('./routes/curiosite');
var objetsRouter = require('./routes/objets');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books',booksRouter);
app.use('/curiosite',curiositeRouter);
app.use('/objets',objetsRouter);




/*Authentification */
let User = require('./models/users.model')

const authTokens = {};


const generateAuthToken = ()  =>{
  return crypto.randomBytes(30).toString('hex');
}


function getHashedPassword(password) {
  return bcrypt.hashSync(password, "$2a$10$G1aQn.Tn1jDpUJPLJ2JnEO") // hash created previously created upon sign up
}



app.use('/login',(req, res, next) => {
  // Get auth token from the cookies
  const authToken = req.cookies['AuthToken'];

  // Inject the user to the request
  req.user = authTokens[authToken];

  next();
});



/*

      SIGN  IN

*/
app.post('/login',(req, res) =>{
  const email = req.body.email
  const password = req.body.password

  const hashedPassword = getHashedPassword(password);

   User.find({email:email,password:hashedPassword}).exec(function(err,user){
      if (user.length){
        const authToken = generateAuthToken();
        // Store authentication token
        authTokens[authToken] = user;

        // Setting the auth token in cookies
        res.cookie('AuthToken', authToken,{
          expires : new Date(Date.now()+7230000),//9000000
          httpOnly: true,
          secure: false
        });

        // Redirect user to the protected page
        res.send('ok')
      }else {
        res.send('notok')
      }
      });
});













// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
