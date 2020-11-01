const { requestHelper } = require('../../helper/requestHelper')
const {response} = require('../../helper/responseHelper')
const { KeywordRepo } = require('../../repository')

class KeywordsController{
    static getKeywords = requestHelper(async req => {
        const data = await KeywordRepo.getAll()
        return response(data)
    })

    static saveKeyword = requestHelper(async req => {
        const keyword = req.params.word
        const data = await KeywordRepo.save(keyword)
        return response({id: data.insertId})
    })

    static deleteKeyword = requestHelper(async req => {
        const id = req.params.id
        const data = await KeywordRepo.delete(id)
        return response(data)
    })
}

module.exports = {
    KeywordsController
}