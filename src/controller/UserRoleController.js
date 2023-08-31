const UserRoleModle = require('../models/UserRoleModle');
const SessionService = require('../services/sessionService');

class UserRoleCotroller {
    constructor(){
        this.userRoleModle = new UserRoleModle();
        this.sessionService = new SessionService();
    }

    createUserRole = async (req, res) => {
        // if (this.sessionService.isExist(req)) {
            try {
                const role_name = req.params.role_name;
                const result = JSON.parse( await this.userRoleModle.createUserRole(role_name) );
                res.status(200).json({
                    message: "Success when call api createUserRole",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api createUserRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        // } else {
            
        // }
    }

    getAllUserRole = async (req, res) => {
        // if (this.sessionService.isExist(req)) {
            try {
                const result = JSON.parse( await this.userRoleModle.getAllUserRole() );
                res.status(200).json({
                    message: "Success when call api getAllUserRole",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api getAllUserRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        // } else {
            
        // }
    }

    updateUserRole = async(req, res) => {
        // if (this.sessionService.isExist(req)) {
            try {
                const {role_id, role_name} = req.params;
                const result = JSON.parse( await this.userRoleModle.updateUserRole(role_id, role_name) );
                res.status(200).json({
                    message: "Success when call api updateUserRole",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api updateUserRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        // } else {
            
        // }
    }

    deleteUserRole = async(req, res) => {
        // if (this.sessionService.isExist(req)) {
            try {
                const role_id = req.params.role_id;
                const result = JSON.parse( await this.userRoleModle.deleteUserRole(role_id) );
                res.status(200).json({
                    message: "Success when call api deleteUserRole",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api deleteUserRole: "+error.message,
                    success: false,
                    data: null
                });
            }
        // } else {
            
        // }
    }
}

module.exports = UserRoleCotroller;