const userService = require('../services/user.service');

const userController = {};

userController.getAllUsers = (req, res, next) =>
    userService
        .getAllUsers()
        .then((data) => res.status(200).send(data))
        .catch(next);

userController.getOneUser = (req, res, next) =>
    userService
        .getOneUser(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch(next);

userController.saveUser = (req, res, next) =>
    userService
        .saveUser(req.body)
        .then((data) => res.status(201).send(data))
        .catch(next);

module.exports = userController;
