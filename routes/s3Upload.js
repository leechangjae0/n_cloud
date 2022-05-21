const AWS = require('aws-sdk');
const BUCKET_NAME = 'mymoviebucketjunhoon';
const s3 = new AWS.S3({   accessKeyId: 'AKIAYFPCMCXS4K7WDLMN',   secretAccessKey: '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' });
const multer = require('multer');
const multerS3 = require('multer-s3');
const moment = require('moment');
const path = require('path');
const storage = multerS3({
    s3: s3,
    acl: 'public-read-write',
    bucket: BUCKET_NAME,   // s3 버킷명+경로
    key: (req, file, callback) => {
        let dir = req.body.dir;
        let datetime = moment().format('YYYYMMDDHHmmss');
        let extension = path.extname(file.originalname);
        callback(null, Date.now().toString() + extension); // 저장되는 파일명
    }
});
upload = multer({ storage: storage });
module.exports = upload;