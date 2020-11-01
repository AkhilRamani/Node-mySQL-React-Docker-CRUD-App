const { requestHelper } = require('../../helper/requestHelper')
const {response} = require('../../helper/responseHelper')
const { SitesRepo } = require('../../repository')

class SitesController{
    static getSites = requestHelper(async req => {
        const data = await SitesRepo.getAll()
        return response(data)
    })

    static saveSite = requestHelper(async req => {
        const site = req.params.site
        const data = await SitesRepo.save(site)
        return response({id: data.insertId})
    })

    static deleteSite = requestHelper(async req => {
        const id = req.params.id
        const data = await SitesRepo.delete(id)
        return response(true)
    })
}

module.exports = {
    SitesController
}