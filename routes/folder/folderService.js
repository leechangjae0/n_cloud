const mysqlExecutor = require('../../model/mysqlExecutor');
const mysqlStatement = require('./movietheaterStatement');


exports.createMovietheater = async (req, res, next) => {
    try {
        const name = req.body.name;
        const location = req.body.location;



        const sqldata = await mysqlExecutor(
            await mysqlStatement.createFolder(), [name, location]
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

exports.readMovietheater = async (req, res, next) => {
    try {
        const sqldata = await mysqlExecutor(
            await mysqlStatement.readFolder(), []
        );
        res.send({
            status: 'ok',
            message: 'success',
            data: sqldata
        })
    } catch (e) {

    }
}


