const express = require('express');
const router = express.Router();
const user = require('./userService.js');


const s3Upload = require('../s3Upload');

 router.route('/') 
     .post(folder.createFolder)
     .get(folder.readFolder)
    
module.exports = router;