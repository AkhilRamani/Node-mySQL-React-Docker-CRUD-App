module.exports.response = (data, statusCode = 200) => ({
    code: statusCode,
    payload: data
})