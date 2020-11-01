const { db } = require("../../helper/db.helper");
const {NoRecordWithIdException} = require('../../helper/exception.helper')

class SitesRepo{
    static getAll(){
        return new Promise((resolve, reject) => {
            db.query('select * from sites', (err, rows, fields) => {
                if(err) reject(err)

                resolve(rows)
            })
        })
    }

    static save(site){
        return new Promise((resolve, reject) => {
            const query = db.format('insert into sites (site) values (?)', site)

            db.query(query, (err, response) => {
                if(err) reject(err)
                resolve(response)
            })
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            const query = db.format('delete from sites where id=?', id)

            db.query(query, (err, response) => {
                if(err) reject(err)

                if(response.affectedRows == 0) reject (new NoRecordWithIdException())
                resolve(response)
            })
        })
    }
}

module.exports = {
    SitesRepo
}