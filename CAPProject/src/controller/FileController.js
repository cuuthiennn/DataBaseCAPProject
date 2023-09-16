const fileModle = require('../models/FileModle');
const SessionService = require('../services/sessionService');
const GoogleAPIConfig = require('../services/googleapis');
const multer = require('multer');

class FileController {
    constructor() {
        this.fileModle = new fileModle();
        this.sessionService = new SessionService();
        this.googleAPIConfig = new GoogleAPIConfig();
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
                const result = JSON.parse( await this.fileModle.addFile(file) ).recordset;
    
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
        }
    };

    getAllFile = async (req, res) => {
        if (this.sessionService.isExist(red)) {
            try {
                const user_id = req.params.id;
                const result = JSON.parse( await this.fileModle.getAllFile(user_id) ).recordset;
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
        }
    };

    deleteFile = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            try {
                const {file_id, user_id} = req.params;
                const result = JSON.parse( await this.fileModle.deleteFile(file_id, user_id) ).recordset;
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
                const result = JSON.parse( await this.fileModle.updateFile(file) ).recordset;
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
        }
    }

    addFileToDrive = async (req, res) => {
        if (this.sessionService.isExist(req)) {
            const { fileParentName } = req.params;
            const file = req.file;
            try{
                const fileParentId = await this.googleAPIConfig.getParentFileId(fileParentName);
                const result = JSON.parse( await this.googleAPIConfig.uploadFile(file, fileParentId) );
                res.status(200).json({
                    message: "File updated successfully",
                    success: true,
                    data: result
                })
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api addDriveFile: "+error.message,
                    success: false,
                    data: null
                });
            }
        }
    }

    createFolderToDrive = async(req, res) => {
        if (this.sessionService.isExist(req)) {
            const path = req.body.path;
            try {
                const result = await this.googleAPIConfig.createFolderByPath(path);
                res.status(200).json({
                    message: "Folder created successfully",
                    success: true,
                    data: result
                });
            } catch (error) {
                res.status(404).json({
                    message: "Error when call api createFolder: "+error.message,
                    success: false,
                    data: null
                });
            }
        }
    }

}

module.exports = FileController;