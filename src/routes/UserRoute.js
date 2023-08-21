const express = require('express');
const router = express.Router();
const {getAllUser,  getUserById, create, update, deleteUser, login, register} = require('../controller/UserController')

router.route('/getAllUser').get(getAllUser)

router.route('/getUserById/:id').get(getUserById);

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/create').post(create);

router.route('/update/:id').put(update);

router.route('/delete/:id').delete(deleteUser);


module.exports = router;