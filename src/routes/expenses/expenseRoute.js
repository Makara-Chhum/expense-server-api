const express = require('express');
const { 
    createExpCtrl,
    fetchAllExpCtrl, 
    fetchDetailExpCtrl, 
    updateExpCtrl,
    deleteExpCtrl
} = require('../../controller/expenses/expenseCtrl');

const authMiddleware = require('../../middleware/authMiddleware');

const expenseRoute = express.Router();
expenseRoute.post('/',authMiddleware, createExpCtrl);
expenseRoute.get('/',authMiddleware, fetchAllExpCtrl);
expenseRoute.get('/:id',authMiddleware, fetchDetailExpCtrl);
expenseRoute.put('/:id',authMiddleware, updateExpCtrl);
expenseRoute.delete('/:id',authMiddleware, deleteExpCtrl);


module.exports = expenseRoute;