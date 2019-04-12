
const MongoClient = require('mongodb').MongoClient;

var colFind = function() {
  	var conn = MongoClient.connect('mongodb://localhost:27017/test');
    return conn.then(function(db) {
                  var collection = db.db('inventory').collection('inventory');      
                  return collection.find().toArray();
                })
                // .then(function(items) {
                //   return items;
                // });
}

module.exports.colFind = colFind;