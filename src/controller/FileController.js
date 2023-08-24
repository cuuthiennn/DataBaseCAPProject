const fileModle = require('../models/FileModle');
const SessionService = require('../services/sessionService');

class FileController {
    constructor() {
        this.fileModle = new fileModle();
        this.sessionService = new SessionService();
    }

    addFile = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const file = {
                    "user_id": req.params.user_id,
                    "file_name": req.params.file_name,
                    "upload_date": req.params.upload_date,
                    "status": req.params.status,
                    "file_path": req.params.file_path,
                }
                const result = JSON.parse( await this.fileModle.addFile(file) );
    
                res.status(200).json({
                    message: "File added successfully",
                    success: true,
                    data: result
                })
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api addFile: "+error.message,
                    success: false,
                    data: null
                })
            }
        } else {
            
        }
    };

    getAllFile = async (req, res) => {
        if (this.sessionService.isExist(red)) {
            try {
                const user_id = req.params.id;
                const result = JSON.parse( await this.fileModle.getAllFile(user_id) );
                res.status(200).json({
                    message: "File added successfully",
                    success: true,
                    data: result
                })
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api getAllFile: "+error.message,
                    success: false,
                    data: null
                })
            }
        } else {
            
        }
    };

    deleteFile = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const {file_id, user_id} = req.params;
                const result = JSON.parse( await this.fileModle.deleteFile(file_id, user_id) );
                res.status(200).json({
                    message: "File deleted successfully",
                    success: true,
                    data: result
                })
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api deleteFile: "+error.message,
                    success: false,
                    data: null
                })
            }
        } else {
            
        }
    }

    updateFile = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const file = {
                    "id": req.params.id,
                    "user_id": req.params.user_id,
                    "file_name": req.params.file_name,
                    "upload_date": req.params.upload_date,
                    "status": req.params.status,
                }
                const result = JSON.parse( await this.fileModle.updateFile(file) );
                res.status(200).json({
                    message: "File updated successfully",
                    success: true,
                    data: result
                })
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api updateFile: "+error.message,
                    success: false,
                    data: null
                })
            }
        } else {

        }
    }
}

module.exports = FileController;