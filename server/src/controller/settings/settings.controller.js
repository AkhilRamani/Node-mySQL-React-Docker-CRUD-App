const { requestHelper } = require('../../helper/requestHelper')
const {response} = require('../../helper/responseHelper')
const { SettingsRepo } = require('../../repository')

class SettingsController{
    static getSettings = requestHelper(async req => {
        const data = await SettingsRepo.get()
        return response(data[0])
    })

    static saveSettings = requestHelper(async req => {
        const settingData = req.body
        const data = await SettingsRepo.save(settingData)
        return response({id: data.insertId})
    })

    static updateSettings = requestHelper(async req => {
        const settingData = req.body
        const id = req.params.id
        const data = await SettingsRepo.update(id, settingData)
        return response(data)
    })
}

module.exports = {
    SettingsController
}