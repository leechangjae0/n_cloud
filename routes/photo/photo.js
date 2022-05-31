const express = require('express');
const router = express.Router();
const photo = require('./photoService.js');


const s3Upload = require('../s3Upload');


    

router.post('/', s3Upload.single('image'), photo.createPhoto);

router.route('/') 
    .get(photo.readPhoto)

router.route('/test') 
    .get(photo.read2Photo)


module.exports = router;