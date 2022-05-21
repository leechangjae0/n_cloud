const express = require('express');
const router = express.Router();
const photo = require('./photoService.js');


const s3Upload = require('../s3Upload');


    

router.post('/', s3Upload.single('image'), photo.createPhoto);

module.exports = router;