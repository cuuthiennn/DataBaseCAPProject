const userModle = require('../models/UserModle');
const SessionService = require('../services/sessionService');

class UserController{
    constructor(){
        this.userModle = new userModle();
        this.sessionService = new SessionService();
    }

    getAllUser = async (req, res) => {
        if(this.sessionService.isExist(req)) {
            try {
                const result =JSON.parse(await this.userModle.getAllUser()).recordsets;
                res.status(200).json({
                    message: "Success when call api getAllUser",
                    success: true,
                    data: result,
                })
            } catch (error) {
                res.status(404).json({
                    message: "Failed when call api getAllUser"+ error.message,
                    success: false,
                    data: null,
                })
            }
        }
    };

    getUserById = async (req, res) => {
        if(this.sessionService.isExist(req)) {
            try {
                const result = JSON.parse(await this.userModle.getUserById(req.params.id)).recordset;
                res.status(200).json({
                    message: "Success when call api getUserById",
                    success: true,
                    data: result,
                })
            } catch (error) {
                res.status(404).json({
                    message: "Failed when call api getUserById: "+ error.message,
                    success: false,
                    data: null,
                })
            }
        }
    };

    create = async (req, res) => {
        if(this.sessionService.isExist(req)){
            try {
                const result = JSON.parse(await this.userModle.createUser(req.body)).recordsets;
                res.status(200).json({
                    message: "Success when call api create",
                    success: true,
                    data: result,
                });
            } catch (error) {
                res.status(404).json({
                    message: "Failed when call api create: "+ error.message,
                    success: false,
                    data: null,
                })
            }
        }
    };

    update = async (req, res) => {
        if(this.sessionService.isExist(req)) {
            try {
                const result = JSON.parse(await this.userModle.updateUser(req.params.id, req.body)).recordset;
                res.status(200).json({
                    message: "Success when call api update",
                    success: true,
                    data: result,
                });
            } catch (error) {
                res.status(404).json({
                    message: "Failed when call api update: "+ error.message,
                    success: false,
                    data: null,
                })
            }
        }
    };

    delete = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            const user_id = req.params.id;
            try {
                const result = JSON.parse( await this.userModle.delete(user_id)).recordset;
            res.status(200).json({
                message: "Success when call api deleteUser",
                success: true,
                data: result
            });
            } catch (error) {
                
            res.status(404).json({
                message: "Failed when call api deleteUser: " + error.message,
                success: false,
            })
            }
        }
    };

    login = async (req, res) => {
        try {
            const user = {
                user_name: req.params.user_name,
                password: req.params.password
            }
            const result = JSON.parse(await this.userModle.login(user)).recordset;
            if(result) {
                this.sessionService.setSession(req, result[0].id, result[0].user_name)
                res.status(200).json({
                    message: "Success when call api login",
                    success: true,
                });
            }
        } catch (error) {
            res.status(404).json({
                message:"Error when call api login: "+ error.message,
                success: false,
            })
        }
    };

    register = async (req, res) => {
        try {
            const result = JSON.parse(await this.userModle.createUser(req.params.id, req.body)).recordset;
            res.status(200).json({
                message: "Success when call api register",
                success: true,
                data: result
            });
        } catch (error) {
            res.status(404).json({
                message: "Failed when call api register: "+ error.message,
                success: false,
                data: null
            })
        }
    };

    logout = (req, res) => {
        if(this.sessionService.isExist(req)){
            try {
                this.sessionService.deleteSession(req);
                res.status(200).json({
                message: "Success when call api logout",
                success: true,
            });
            } catch (error) {
                res.status(500).json(
                    {
                        message: "Failed when call api logout: " + error.message,
                        success: false,
                    }
                )
            }
        }
    };
}

module.exports = UserController;