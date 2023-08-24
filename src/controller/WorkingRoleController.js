const WorkingRoleModle = require('../models/WorkingRoleModle');

class WorkingRoleController {
    constructor(){
        this.workingRoleModle = new WorkingRoleModle();
    }

    createWorkingRole = async (req, res) => {
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

    getAllWorkingRole = async (req, res) => {
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
    }

    updateWorkingRole = async (req, res) => {
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
    }

    deleteWorkingRole = async (req, res) => {
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
    }
}

module.exports = WorkingRoleController;