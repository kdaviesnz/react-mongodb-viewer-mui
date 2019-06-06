var express = require('express');
var router = express.Router();

const MongoDB = require('mongodb')
const MongoClient = MongoDB.MongoClient

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

            const db = client.db(req.body.database)
            const collection = req.body.collection

            console.log('req:')
            console.log(req.body.query)

            // The find() method with no parameters returns all documents from a collection and returns all fields for the documents.
            const query_object = req.body.query === ""?"":JSON.parse(req.body.query.trim())
            console.log(query_object)
            const cursor = db.collection(collection).find(query_object)
            const documents = []

            cursor.forEach(
                (doc) => documents.push(doc),
                (err) => {
                    console.log(documents.length)
                    res.send({
                        collecton: req.body.collection,
                        documents: documents
                    })
                    client.close()
                }
            )
        }
    })

});


module.exports = router;
