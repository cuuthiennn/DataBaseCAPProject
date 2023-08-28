const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const userController = new UserController();

router.route('/getAllUser').get(userController.getAllUser)

router.route('/getUserById/:id').get(userController.getUserById);

router.route('/register').post(userController.register);

router.route('/login/:user_name.:password').post(userController.login);

router.route('/create').post(userController.create);

router.route('/update/:id').put(userController.update);

router.route('/delete/:id').delete(userController.delete);

router.route('/logout').post(userController.logout);

module.exports = router;