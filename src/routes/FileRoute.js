const express = require('express');
const FileController = require('../controller/FileController');
const router = express.Router();
const fileController = new FileController();

router.route('/getAllFile/:user_id').get(fileController.getAllFile);

router.route('/addFile').post(fileController.addFile);

router.route('/deleteFile/:user_id.:file_id').delete(fileController.deleteFile);

router.route('/updateFile').post(fileController.updateFile);

module.exports = router;
