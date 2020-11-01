const { Router } = require('express')
const { KeywordsController, SitesController, SettingsController } = require('./controller')

class Routes{
    keywordsRouter = Router()
    sitesRouter = Router()
    settingsRouter = Router()

    constructor(app){
        this.bindRoutes(app)
        
        this.keywordsRoutes(this.keywordsRouter)
        this.sitesRoutes(this.sitesRouter)
        this.settingsRoutes(this.settingsRouter)
    }

    bindRoutes(app){
        app.use('/keyword', this.keywordsRouter)
        app.use('/site', this.sitesRouter)
        app.use('/setting', this.settingsRouter)
    }

    keywordsRoutes(keywordsRouter){
        keywordsRouter.get('/', KeywordsController.getKeywords)
        keywordsRouter.post('/:word', KeywordsController.saveKeyword)
        keywordsRouter.delete('/:id', KeywordsController.deleteKeyword)
    }

    sitesRoutes(sitesRouter){
        sitesRouter.get('/', SitesController.getSites)
        sitesRouter.post('/:site', SitesController.saveSite)
        sitesRouter.delete('/:id', SitesController.deleteSite)
    }

    settingsRoutes(settingsRouter){
        settingsRouter.get('/', SettingsController.getSettings)
        settingsRouter.post('/', SettingsController.saveSettings)
        settingsRouter.patch('/:id', SettingsController.updateSettings)
    }
}

module.exports = {
    Routes
}