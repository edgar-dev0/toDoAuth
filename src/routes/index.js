const express = require('express');
const userRouter = require('./userRouter');
const toDoRouter = require('./toDoRouter');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter);
router.use('/todos', toDoRouter);


module.exports = router;