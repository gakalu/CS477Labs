

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let _db;  
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        .then(client => {
    
            _db = client.db('testDB');
            callback();
             console.log("......", client)
        })
        .catch(err => console.log(err));
}
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw new Error('No Database Found!');
}

const insert = (data) => {
    _db.onlineshopping.insert({})
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;