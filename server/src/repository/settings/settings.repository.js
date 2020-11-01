const { db } = require("../../helper/db.helper");
const {NoRecordWithIdException} = require('../../helper/exception.helper')

class SettingsRepo{
    static get(){
        return new Promise((resolve, reject) => {
            db.query('select * from settings limit 1', (err, rows, fields) => {
                if(err) reject(err)
                resolve(rows)
            })
        })
    }

    static save(data){
        const keys = Object.keys(data)

        let query = 'insert into settings ('
        keys.forEach(key => query += `${key},`)
        query = query.substr(0, query.length-1) + ') values ('
        keys.forEach(_ => query += `?,`)
        query = db.format(query.substr(0, query.length-1) + ')', Object.values(data))

        return new Promise((resolve, reject) => {
            db.query(query, (err, response) => {
                if(err) reject(err)
                resolve(response)
            })
        })
    }

    static update(id, data){
        let query = 'update settings set '
        Object.keys(data).forEach(key => query += `${key}=?,`)
        query = db.format(query.substr(0, query.length-1) + ` where id=${id}`, Object.values(data))

        return new Promise((resolve, reject) => {
            db.query(query, (err, response) => {
                if(err) reject(err)
                if(response.affectedRows == 0) reject (new NoRecordWithIdException())
                resolve(response)
            })
        })
    }
}

module.exports = {
    SettingsRepo
}