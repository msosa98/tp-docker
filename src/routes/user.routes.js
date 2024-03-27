const { Router } = require('express');

const userController = require('../controllers/user.controller.js');

const userRoutes = Router();

userRoutes.get('/users', userController.getAllUsers);
userRoutes.get('/users/:id', userController.getOneUser);
userRoutes.post('/users', userController.saveUser);

module.exports = userRoutes;
