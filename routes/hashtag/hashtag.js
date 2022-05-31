const express = require('express');
const router = express.Router();
const folder = require('./folderService.js');


const s3Upload = require('../s3Upload');

router.route('/') 
    .post(hashtag.createHashtag)
    .get(hashtag.readHashtag)
    


module.exports = router;