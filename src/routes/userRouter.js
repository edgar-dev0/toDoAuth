const { getAll, create, getOne, remove, update, login, logeduser } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT, getAll)
    .post(create);

userRouter.route('/login')
  .post(login);

userRouter.route('/me')
  .get(verifyJWT, logeduser);

userRouter.route('/:id')
    .get(verifyJWT, getOne)
    .delete(remove)
    .put(update);

module.exports = userRouter;