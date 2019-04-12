var smts = require('simple-mongo-timeseries');
const os = require('os-utils');

var options = {
	connectionString: 'mongodb://localhost:27017/test',
	collection: 'timeseries'
};

var promise = smts(options).connect();


setInterval(function(){
	os.cpuUsage(function(v){
		promise.then(function(mongoTS) {
			mongoTS.storeReading('sensor', v, new Date());
		});
	})
	
}, 1000);