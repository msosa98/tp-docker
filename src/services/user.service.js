const userRepository = require('../repositories/user.repository');

const userService = {};

userService.getAllUsers = () => userRepository.getAllUsers();

userService.getOneUser = (id) => userRepository.getOneUser(id);

userService.saveUser = (user) => userRepository.saveUser(user);

module.exports = userService;
