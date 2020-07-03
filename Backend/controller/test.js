require('dotenv').config()

const connection = require('../Database/database')

exports.test =  async function(req, res) {
    connection.query(
        "SELECT * FROM TestTable",
        function (error, results, fields) {
            if(error){
                res.send(error)
                console.error(error)
            }
            res.json(results)
        }
    )
}