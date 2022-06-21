const express = require('express');
const router = express.Router();
const folder = require('./folderService.js');


const s3Upload = require('../s3Upload');

router.route('/') 
    .post(folder.createFolder)
    .get(folder.readFolder)
    .delete(folder.deleteFolder)


module.exports = router;