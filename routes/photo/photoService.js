const mysqlExecutor = require('../../model/mysqlExecutor');
const mysqlStatement = require('./photoStatement');


exports.createPhoto = async (req, res, next) => {
    try {
        const {folderIdx, userIdx} = req.body
        
        const sqldata = await mysqlExecutor(
            await mysqlStatement.createPhoto(), [req.file.originalname, folderIdx, req.file.location, userIdx]
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



