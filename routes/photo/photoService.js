const mysqlExecutor = require('../../model/mysqlExecutor');
const mysqlStatement = require('./photoStatement');


exports.createPhoto = async (req, res, next) => {
    try {
        const {folderIdx, userIdx, hashtagList} = req.body
        console.log(req.body)

        const sqldata = await mysqlExecutor(
            await mysqlStatement.createPhoto(), [req.file.originalname, folderIdx, req.file.location, userIdx, hashtagList]
        );

        console.log(req.file)
        res.send({
            status: 'ok',
            message: 'success',
            data : ""
        })
    } catch (e) {
        console.error(e);
        res.send({
            status: 'FAIL',
            messsage: '안됐어요'
        })
    }
}

exports.readPhoto = async (req, res, next) => {
    try {
        const {userIdx} = req.query

        const sqldata = await mysqlExecutor(
            await mysqlStatement.readPhoto(), [userIdx]
        );
        res.send({
            status: 'ok',
            message: 'success',
            data: sqldata
        })
    } catch (e) {

    }
}

exports.read2Photo = async (req, res, next) => {
    try {
        const {folderIdx} = req.query

        const sqldata = await mysqlExecutor(
            await mysqlStatement.read2Photo(), [folderIdx]
        );
        res.send({
            status: 'ok',
            message: 'success',
            data: sqldata
        })
    } catch (e) {

    }
}

exports.readHashTagRank = async (req, res, next) => {
    try {
        const sqldata = await mysqlExecutor(
            await mysqlStatement.readHashTagRank(), []
        );

        let result;

        result = sqldata[0].HASHTAG
        console.log(result.split(','))
        let resultarray = result.split(',')
        
        for (let i = 0; i < resultarray.length; i++){
            console.log(i); 
        }

        res.send({
            status: 'ok',
            message: 'success',
            data: sqldata
        })
    } catch (e) {

    }
}


