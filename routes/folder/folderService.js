const mysqlExecutor = require('../../model/mysqlExecutor');
const mysqlStatement = require('./folderStatement');


exports.createFolder = async (req, res, next) => {
    try {
        const {userIdx, folderName} = req.body
        
        const sqldata = await mysqlExecutor(
            await mysqlStatement.createFolder(), [userIdx, folderName]
        );
        console.log(sqldata)

        const updatePoint = await mysqlExecutor(
            await mysqlStatement.updatePoint(), [userIdx]
        );

        const insertPoint_history = await mysqlExecutor(
            await mysqlStatement.insertPoint_history(), [userIdx, sqldata.insertId, 1000, '폴더생성시 포인트1000원 적립']
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

exports.deleteFolder = async (req, res, next) => {
    try {
        const {Idx, userIdx} = req.body
        
        const sqldata = await mysqlExecutor(
            await mysqlStatement.deleteFolder(), [Idx]
        );

        const updatePoint2 = await mysqlExecutor(
            await mysqlStatement.updatePoint2(), [userIdx]
        );

        const insertPoint_history2 = await mysqlExecutor(
            await mysqlStatement.insertPoint_history2(), [userIdx, sqldata.insertId, -1000, '폴더삭제시 포인트1000원 감소']
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