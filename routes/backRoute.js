const express = require('express');
const router = express.Router();


const userRoute = require('./user/user.js');
const folderRoute = require('./folder/folder.js');
const photoRoute = require('./photo/photo.js');

router.use('/folder', folderRoute);
//router.use('/user', userRoute);
router.use('/photo', photoRoute);

module.exports = router;