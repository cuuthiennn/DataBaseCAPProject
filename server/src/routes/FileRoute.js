const express = require('express');
const FileController = require('../controller/FileController');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const fileController = new FileController();

router.route('/getAllFile/:user_id').get(fileController.getAllFile);

router.route('/addFile').post(fileController.addFile);

router.route('/deleteFile/:user_id.:file_id').delete(fileController.deleteFile);

router.route('/updateFile').post(fileController.updateFile);

router.route('/addFileToDrive/:fileParentName').post(upload.single('file'), fileController.addFileToDrive);

router.route('/createFolderToDrive').post(fileController.createFolderToDrive);

module.exports = router;
