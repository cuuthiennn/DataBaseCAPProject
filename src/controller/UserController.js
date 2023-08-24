const userModle = require('../models/UserModle');

class UserController{
    constructor(){
        this.userModle = new userModle();
    }

    getAllUser = async (red, res) => {
        //if(red.session.user.id != undefined && red.session.user.user_name != undefined   ) {
            try {
                const result =JSON.parse(await this.userModle.getAllUser()).recordsets;
                res.status(200).json({
                    message: "Success when call api getAllUser",
                    success: true,
                    data: result,
                })
            } catch (error) {
                res.status(404).json({
                    message: "Failed when call api getAllUser",
                    success: false,
                    data: null,
                })
            }
        // } else {
        //     red.redirect('/login');
        // }
    };

    getUserById = async (red, res) => {
        if(red.session.user.id && red.session.user.user_name){
            try {
                const result = JSON.parse(await this.userModle.getUserById(red.params.id)).recordset;
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
        } else {
            red.redirect('/login');
        }
    };

    create = async (red, res) => {
        if(red.session.user.id && red.session.user.user_name){
            try {
                const result = JSON.parse(await this.userModle.createUser(red.body)).recordsets;
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

    update = async (red, res) => {
        if(red.session.user.id && red.session.user.user_name) {
            try {
                const result = JSON.parse(await this.userModle.updateUser(red.params.id, red.body)).recordset;
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

    deleteUser = (red, res) => {
        if (red.session.user.id && red.session.user.user_name) {
            try {
                const result = this.userModle.deleteUser(red.params.id);
            res.status(200).json({
                message: "Success when call api deleteUser",
                success: true,
            });
            } catch (error) {
                
            res.status(404).json({
                message: "Failed when call api deleteUser: " + error.message,
                success: false,
            })
            }
        }
    };

    login = async (red, res) => {
        try {
            const user = {
                user_name: red.params.user_name,
                password: red.params.password
            }
            const result = JSON.parse(await this.userModle.login(user)).recordset;
            if(result) {
                red.session.user = {
                    id: result[0].id,
                    user_name: result[0].user_name
                };
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

    register = (red, res) => {
        res.status(200).json({
            message: "Success when call api register",
            success: true,
        });
    };

    logout = (red, res) => {
        if(red.session.user.id && red.session.user.user_name){
            try {
                red.session.destroy();
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