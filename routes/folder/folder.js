const express = require('express');
const router = express.Router();
const folder = require('./folderService.js');


const s3Upload = require('../s3Upload');

router.route('/') 
    .post(folder.createFolder)
    .get(folder.readFolder)
    
router.route('/test')
    .get(folder.read2Folder)

module.exports = router;