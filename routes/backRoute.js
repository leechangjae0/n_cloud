const express = require('express');
const router = express.Router();


const userRoute = require('./user/movietheater.js');
const folderRoute = require('./folder/user.js');
const photoRoute = require('./photo/user.js');

router.use('/movietheater', movieRoute);
router.use('/user', userRoute);

module.exports = router;