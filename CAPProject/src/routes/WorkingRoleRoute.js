const express = require('express')
const router = express.Router()
const WorkingRoleController = require('../controller/WorkingRoleController')
const workingRoleController = new WorkingRoleController()

router.route('/getPathById/:id').get(workingRoleController.getPathById)

router.route('/getWorkingRoleChileById/:id').get(workingRoleController.getWorkingRoleChileById)

router.route('/createRole/:path_name.:role_parent_id').post(workingRoleController.createWorkingRole)

router.route('/updateRole/:id.:path_name.:role_parent_id').put(workingRoleController.updateWorkingRole)

router.route('/deleteRole/:id').delete(workingRoleController.deleteWorkingRole)

module.exports = router