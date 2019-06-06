const MongoDB = require('mongodb')
const MongoClient = MongoDB.MongoClient

var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {


    // @todo this is repeated code see mongo.js
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
        if (err) {
            res.send(err)
        } else {
            const db = client.db(req.body.database);
            const collections = db.collections((Err, collections)=> {
                const mongo_collections = collections.map(
                    (collection) => {
                        return {
                            dbname: req.body.database,
                            name: collection.collectionName,
                        }
                    }
                )

                res.send(
                    {
                        database: req.body.database,
                        collections: mongo_collections
                    }
                )
            })

            /*
            const adminDB = db.admin()
            adminDB.listDatabases(function(err, dbs) {
                res.send(dbs.databases)
            });
            */
        }
    })

});


module.exports = router;
