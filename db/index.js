
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
/*
const skema = [{  
  "type": null,
  "location": null, 
  "data": {
    "timestamp": null,
    "value": {
      // "0": null,      
    }
  }
}]
*/

// Insert Documents
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection(dbName);
  var date = new Date();
  // Insert some documents
  collection.insertMany(
  	skema, function(err, result) {
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}
// Find Documents
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection(dbName);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

// Find Doc use promises
var colFind = function(client, url, dbName) {
    // var conn = MongoClient.connect(url);
    return client.then(function(db) {
                  var collection = db.db(dbName).collection(dbName);      
                  return collection.find().toArray();
                })
}

// Check POSIX is between query value
var checkPosix = function(client, url, dbName, posix1, posix2, objId){
  return client.then(function(db){
  	var collection = db.db(dbName).collection(dbName);
    var date1 = new Date();
    var date2 = new Date();
    date1.setTime(posix1*1000); // times 1000 because JS use milisecond
    date2.setTime(posix2*1000);
    
    var objPos = {"data":{"value":{}}};
    var z = collection.find({}, objPos);

    // z.each(function(err, doc){
    //   if(err) console.log(err);
    //   if(doc != null){
    //     console.log(doc);
    //     return doc;
    //   }
    // })
	// client.close();
  })
}


// Update time use Unix Timestamp style
const updateTimePosix = function test(db, objId, callback){
  const collection = db.collection(dbName);
  let objectId = new ObjectId(objId);
  let posix = new Date();
  var objSec = {'$set':{}};
  setObj = 'data.value.'+ Math.floor(posix.getTime()/1000); // divide 1000 to hide miliseconds
  
  os.cpuUsage(function(v){
    console.log(v);
    objSec.$set[setObj] = v;
    collection.updateOne({"_id": objectId}, objSec);
  })  
  
};

/*
// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // insertDocuments(db, function(){
  //  client.close();
  // });

  // findDocuments(db, function(){
  //  client.close();
  // });


  // setInterval(function(){updateTimePosix(db, objId, function(){})}, 1000);  // pass db parameter to inside 
  
  var tes = checkPosix(1554458417, 1554458469, objId, db);  
  
});*/

const test = function(){
  console.log('Var test');
  // return 'Var test';
  return ;
}

const hello = function(){
  // console.log('Var hello');
  return 'Var hello'
}

// module.exports.findDocuments = findDocuments;
// module.exports.test = test; 
module.exports.colFind = colFind;
module.exports.checkPosix = checkPosix;
module.exports.updateTimePosix = updateTimePosix;