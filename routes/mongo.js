var express = require('express');
var router = express.Router();
const MongoDB = require('mongodb')
const MongoClient = MongoDB.MongoClient

router.post('/', function(req, res, next) {

    let connection_string = ""
    console.log(req.body)
    const SRV = req.body.SRV?"+srv":""

    if (req.body.username === null && req.body.password === null && req.body.hostname === "localhost") {
        console.log("local")
        //connection_string =  process.env.MONGODB_URI || `mongodb${SRV}://localhost:${req.body.port}`
        connection_string =  process.env.MONGODB_URI || 'mongodb://localhost:27017/temp'
    } else {
        connection_string = `mongodb${SRV}://${req.body.username}:${req.body.password}@${req.body.hostname}`
    }

    console.log(connection_string)

    MongoClient.connect(connection_string,  function (err, client) {

        console.log(err)

        if (err) {
            res.send(err)
        } else {

            const db = client.db('temp');
            const adminDB = db.admin()
            adminDB.listDatabases(function(err, dbs) {
                res.send({
                    success: true,
                    dbs: dbs.databases
                })
            });

        }
    })

});


module.exports = router;
