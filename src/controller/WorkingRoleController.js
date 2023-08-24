const WorkingRoleModle = require('../models/WorkingRoleModle');
const SessionService = require('../services/sessionService');

class WorkingRoleController {
    constructor(){
        this.workingRoleModle = new WorkingRoleModle();
        this.sessionService = new SessionService();
    }

    createWorkingRole = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const {path_name, role_parent_id} = req.params;
                const workingRole = await this.userRoleModle.createUserRole(path_name, role_parent_id);
                res.status(200).json({
                    message: "Success when call api createWorkingRole",
                    success: true,
                    data: workingRole
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api createWorkingRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        } else {
            
        }
    }

    getAllWorkingRole = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const workingRole = await this.workingRoleModle.getAllWorkingRole();
                res.status(200).json({
                    message: "Success when call api getAllWorkingRole",
                    success: true,
                    data: workingRole
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api getAllWorkingRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        } else {
            
        }
    }

    updateWorkingRole = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const {id, path_name, role_parent_id} = req.params;
                const workingRole = await this.workingRoleModle.updateWorkingRole(id, path_name, role_parent_id);
                res.status(200).json({
                    message: "Success when call api updateWorkingRole",
                    success: true,
                    data: workingRole
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api updateWorkingRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        } else {
            
        }
    }

    deleteWorkingRole = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const {id} = req.params;
                const workingRole = await this.workingRoleModle.deleteWorkingRole(id);
                res.status(200).json({
                    message: "Success when call api deleteWorkingRole",
                    success: true,
                    data: workingRole
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api deleteWorkingRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        } else {
            
        }
    }
}

module.exports = WorkingRoleController;