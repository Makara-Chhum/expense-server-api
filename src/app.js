const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const {errorHandler, notFound} = require('./middleware/errorMiddleware');
const userRoute = require('./routes/users/usersRoute');
const incomeRoute = require('./routes/income/incomeRoute');
const expenseRoute = require('./routes/expenses/expenseRoute');


const app = express();

//environment variables
dotenv.config();

//dbConnected
dbConnect();

//heroku landing page show
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to Expense-Tracker-App-Api-V3'});
})

//middleware
app.use(express.json());

//users route
app.use('/api/users', userRoute);

//Income route
app.use('/api/income', incomeRoute);

//Expense rooute
app.use('/api/expenses', expenseRoute);

//Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;       