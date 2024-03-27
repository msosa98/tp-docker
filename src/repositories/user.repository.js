const userModel = require('../models/user.model.js');

const userRepository = {};

userRepository.getAllUsers = async () => {
    const users = await userModel.find();
    return users;
};

userRepository.getOneUser = async (id) => {
    const user = await userModel.findById(id);

    if (!user) {
        const error = new Error();
        error.status = 404;
        error.message = 'User with id = ' + id + ' not found';
        throw error;
    }

    return user;
};

userRepository.saveUser = async (user) => {
    const userCreated = await userModel.create(user);
    return userCreated;
};

module.exports = userRepository;
