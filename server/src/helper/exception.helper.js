class NoRecordWithIdException extends Error{
    code = 404
    message = 'no record with such id'
}

module.exports = {
    NoRecordWithIdException
}