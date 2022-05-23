const mysqlExecutor = require('../../model/mysqlExecutor');
const mysqlStatement = require('./folderStatement');


exports.createFolder = async (req, res, next) => {
    try {
        const {userIdx, folderName} = req.body
        
        const sqldata = await mysqlExecutor(
            await mysqlStatement.createFolder(), [userIdx, folderName]
        );

        res.send({
            status: 'ok',
            message: 'success',
            data : sqldata
        })
    } catch (e) {
        console.error(e);
        res.send({
            status: 'FAIL',
            messsage: '안됐어요'
        })
    }
}

exports.readFolder = async (req, res, next) => {
    try {
        const {userIdx} = req.query

        const sqldata = await mysqlExecutor(
            await mysqlStatement.readFolder(), [userIdx]
        );
        res.send({
            status: 'ok',
            message: 'success',
            data: sqldata
        })
    } catch (e) {

    }
}

exports.read2Folder = async (req, res, next) => {
    try {
        const {userIdx, folderIdx} = req.query

        const sqldata = await mysqlExecutor(
            await mysqlStatement.read2Folder(), [userIdx, folderIdx]
        );
        res.send({
            status: 'ok',
            message: 'success',
            data: sqldata
        })
    } catch (e) {

    }
}

