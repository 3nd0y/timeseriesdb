var express = require('express');
var router = express.Router();
var db = require('../db/index');
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;


/* MongoDB Connection */
const objId = '5ca7271618dee53dd81780be';
const url = 'mongodb://localhost:27017/test';
const dbName = 'inventory';
const client = MongoClient.connect(url, {useNewUrlParser: true});
const maxPoint =5000;


/* GET users listing. */
router.get('/', function(req, res, next) {
	// client.connect(function(err) {
	//   console.log("Connected successfully to server");
	//   const db = client.db(dbName);
	//   // var tes = db.checkPosix(1554458417, 1554458469, objId, db);
	//   db.findDocuments();
	// });
	// db.test();

	// Example use module

	// db.checkPosix(client, url, dbName, 1554458417, 1554458469, objId).then(function(data){
	// 	res.send(data);
	// }), function(err){
	// 	console.error('promises rejected', err, err.stack);
	// }

	db.colFind(client, url, dbName).then(function(items){
		x = items[0].data.value;
		y = Object.keys(x);
		j=y.length;
		for(i=0;i<(j-maxPoint);i++){
			s = y[i].toString();
			delete x[s];
		}
		res.send(x);
		// client.close();
	}, function(err){
		console.error('promises rejected', err, err.stack);
	})
});

module.exports = router;
