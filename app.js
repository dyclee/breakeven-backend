const cors = require('cors')
const { environment, origin,  jwtConfig: {secret} } = require("./config");

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersApiRouter = require('./routes/api/users');
const sessionApiRouter = require('./routes/api/session');
const expensesApiRouter = require('./routes/api/expenses');


const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(cors({origin}));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/expenses', expensesApiRouter);
app.use('/api/session', sessionApiRouter);
app.use('/api/users', usersApiRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
    stack: err.stack,
  });
});
// app.use(function(err, _req, res, _next) {
//   res.status(err.status || 500);
//   if (err.status === 401) {
//     res.set('WWW-Authenticate', 'Bearer');
//   }
//   res.json({
//     message: err.message,
//     error: JSON.parse(JSON.stringify(err)),
//   });
// });

module.exports = app;
