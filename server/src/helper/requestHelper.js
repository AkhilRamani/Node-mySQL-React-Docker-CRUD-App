const requestHelper = execution => async (req, res, next) => {
    try{
        const resData = await execution(req, res, next)
        res.status(resData.code).json(resData.payload)
    }
    catch(err){
        console.log(err)
        const errCode = err['code'] && err['code'] >= 100 && err['code'] < 600 && err['code'] || 500
        res.status(errCode).send({ message: err.message || 'bad request' })
    }
}

module.exports = {
    requestHelper
}