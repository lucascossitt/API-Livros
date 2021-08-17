const mysql = require('mysql')

class SQLBuilder {
    query(sql, params) {
        return new Promise(function(resolve, reject) {
            try {
                const opt = {
                    host: process.env.HOST,
                    user: process.env.USER,
                    password: process.env.PASSWORD,
                    database: process.env.DATABASE,
                    timezone: '-03:00'
                };
                const pool = mysql.createPool(opt);
                pool.query(sql, params, function (err, result, fields) {
                    if(err) reject(err);
                    resolve(result);
                });
            } catch (e) {
                console.log('sql', sql);
                console.log(e);
                reject(e);
            }
        });
    }
}
module.exports = SQLBuilder;
