/**
 * @fileOverview The **CommandCursor** class is an internal class that embodies a
 * generalized cursor based on a MongoDB command allowing for iteration over the
 * results returned. It supports one by one document iteration, conversion to an
 * array or can be iterated as a Node 0.10.X or higher stream
 *
 * **CommandCursor Cannot directly be instantiated**
 * @example */
  const MongoClient = require('mongodb').MongoClient;
  const test = require('assert');
  // Connection url
  const url = 'mongodb://localhost:27017';
  // Database Name
  const dbName = 'test';
  // Connect using MongoClient
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    // Create a collection we want to drop later
    var db = client.db(dbName);
    const col = client.db(dbName).collection('listCollectionsExample1');
    // Insert a bunch of documents
    col.insert([{a:1, b:1}
      , {a:2, b:2}, {a:3, b:3}
      , {a:4, b:4}], {w:1}, function(err, result) {
      test.equal(null, err);
      // List the database collections available
      db.listCollections().toArray(function(err, items) {
        test.equal(null, err);
        console.log(items);
        client.close();
      });
    });
  });
 