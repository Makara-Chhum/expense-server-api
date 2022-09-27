const express = require('express');
const { 
    createIncCtrl, 
    fetchAllIncCtrl, 
    fetchDetailIncCtrl, 
    updateIncCtrl,
    deleteIncCtrl
} = require('../../controller/income/incomeCtrl');

const authMiddleware = require('../../middleware/authMiddleware');

const incomeRoute = express.Router();
incomeRoute.post('/',authMiddleware, createIncCtrl);
incomeRoute.get('/',authMiddleware, fetchAllIncCtrl);
incomeRoute.get('/:id',authMiddleware, fetchDetailIncCtrl);
incomeRoute.put('/:id',authMiddleware, updateIncCtrl);
incomeRoute.delete('/:id',authMiddleware, deleteIncCtrl);


module.exports = incomeRoute;