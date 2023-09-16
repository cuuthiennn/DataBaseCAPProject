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
        }
    }

    getPathById = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            const user_id = req.params.id;
            try {
                const result = JSON.parse(await this.workingRoleModle.getPathById(user_id)).recordset;
                if(workingRole.length == 0) throw new Error('Working role not found')
                res.status(200).json({
                    message: "Success when call api getPathById",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api getPathById: "+error.message,
                    success: false,
                    data: null
                });
            }
        }
    }

    getWorkingRoleChileById = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            const user_id = req.params.id;
            try {
                const result = JSON.parse(await this.workingRoleModle.getWorkingRoleChileById(user_id)).recordset;
                res.status(200).json({
                    message: "Success when call api getWorkingRoleChileById",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api getWorkingRoleChileById: "+error.message,
                    success: false,
                    data: null
                });
            }
        }
    };

    updateWorkingRole = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const {id, path_name, role_parent_id} = req.params;
                const result = JSON.parse( await this.workingRoleModle.updateWorkingRole(id, path_name, role_parent_id) ).recordset;
                res.status(200).json({
                    message: "Success when call api updateWorkingRole",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api updateWorkingRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        }
    }

    deleteWorkingRole = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const {id} = req.params;
                const result = JSON.parse( await this.workingRoleModle.deleteWorkingRole(id) ).recordset;
                res.status(200).json({
                    message: "Success when call api deleteWorkingRole",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api deleteWorkingRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        }
    }
}

module.exports = WorkingRoleController;