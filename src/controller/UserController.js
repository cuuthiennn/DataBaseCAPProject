const userModle = require('../models/UserModle');

const getAllUser = async (red, res) => {
    const result =JSON.parse(await userModle.getAllUser()).recordsets;
    if (result != null) {
        res.status(200).json({
            message: "Success when call api getAllUser",
            success: true,
            data: result,
        });
    } else {
        res.status(404).json({
            message: "Failed when call api getAllUser",
            success: false,
            data: null,
        })
    }
};

const getUserById = async (red, res) => {
    const result = JSON.parse(await userModle.getUserById(red.params.id)).recordsets;
    if (result!= null) {
        res.status(200).json({
            message: "Success when call api getUserById",
            success: true,
            data: result,
        });
    } else {
        res.status(404).json({
            message: "Failed when call api getUserById",
            success: false,
            data: null,
        })
    } 
};

const create = async (red, res) => {
    try {
        const result = JSON.parse(await userModle.createUser(red.body)).recordsets;
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
};

const update = async (red, res) => {
    const result = JSON.parse( await userModle.updateUser(red.params.id, red.body)).recordsets;
    if(result!= null){
        res.status(200).json({
            message: "Success when call api update",
            success: true,
            data: result,
        });
    } else {
        res.status(404).json({
            message: "Failed when call api update",
            success: false,
            data: null,

        })
    }
};

const deleteUser = (red, res) => {
    const result = userModle.deleteUser(red.params.id);
    if(result){
        res.status(200).json({
            message: "Success when call api deleteUser",
            success: true,
        });
    } else {
        res.status(404).json({
            message: "Failed when call api deleteUser",
            success: false,
        })
    }
};

const login = (red, res) => {
    res.status(200).json({
        message: "Success when call api login",
        success: true,
    });
};

const register = (red, res) => {
    res.status(200).json({
        message: "Success when call api register",
        success: true,
    });
};

module.exports = {getAllUser,  getUserById, create, update, deleteUser, login, register};