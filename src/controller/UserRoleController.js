const UserRoleModle = require('../models/UserRoleModle');

class UserRoleCotroller {
    constructor(){
        this.userRoleModle = new UserRoleModle();
    }

    createUserRole = async (req, res) => {
        try {
            const role_name = req.params.role_name;
            const userRole = await this.userRoleModle.createUserRole(role_name);
            res.status(200).json({
                message: "Success when call api createUserRole",
                success: true,
                data: userRole
            });
        } catch (error) {
            res.status(404).json({
                message: "Error when call api createUserRole: "+error.message,
                success: false,
                data: null
            });
        }
    }

    getAllUserRole = async (req, res) => {
        try {
            const userRole = await this.userRoleModle.getAllUserRole();
            res.status(200).json({
                message: "Success when call api getAllUserRole",
                success: true,
                data: userRole
            });
        } catch (error) {
            res.status(404).json({
                message: "Error when call api getAllUserRole: "+error.message,
                success: false,
                data: null
            });
        }
    }

    updateUserRole = async(req, res) => {
        try {
            const {role_id, role_name} = req.params;
            const userRole = await this.userRoleModle.updateUserRole(role_id, role_name);
            res.status(200).json({
                message: "Success when call api updateUserRole",
                success: true,
                data: userRole
            });
        } catch (error) {
            res.status(404).json({
                message: "Error when call api updateUserRole: "+error.message,
                success: false,
                data: null
            });
        }
    }

    deleteUserRole = async(req, res) => {
        try {
            const role_id = req.params.role_id;
            const userRole = await this.userRoleModle.deleteUserRole(role_id);
            res.status(200).json({
                message: "Success when call api deleteUserRole",
                success: true,
                data: userRole
            });
        } catch (error) {
            res.status(404).json({
                message: "Error when call api deleteUserRole: "+error.message,
                success: false,
                data: null
            });
        }
    }
}

module.exports = UserRoleCotroller;