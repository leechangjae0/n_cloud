const express = require('express');
const router = express.Router();


const userRoute = require('./user/user.js');
const folderRoute = require('./folder/folder.js');
const photoRoute = require('./photo/photo.js');
const p_hRoute = require('./point_history/ph.js');

router.use('/folder', folderRoute);
router.use('/user', userRoute);
router.use('/photo', photoRoute);
router.use('/point_history', p_hRoute);

module.exports = router;