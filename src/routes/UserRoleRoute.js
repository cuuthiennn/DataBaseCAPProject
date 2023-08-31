const express = require('express')
const UserRoleCotroller = require('../controller/UserRoleController')
const router = express.Router()
const userRoleCotroller = new UserRoleCotroller();

router.route('/getAllUserRole').get(userRoleCotroller.getAllUserRole);

router.route('/createUserRole/:role_name').post(userRoleCotroller.createUserRole);

router.route('/updateUserRole/:role_id.:role_name').put(userRoleCotroller.updateUserRole);

router.route('/deleteUserRole/:role_id').delete(userRoleCotroller.deleteUserRole);

module.exports = router;