var fs = require('fs');

var obj = {};
var posix = 1552317000;
var sposix = '';
var i = 0;

for (posix; posix < (1554910514); posix+=600) {
	sposix = posix.toString();
	obj[sposix] = Math.floor((Math.random() * 100) + 1);
	i++;
}
var jsonStr = JSON.stringify(obj);
console.log('Created '+i+' points');

fs.writeFile("data_15day.json", jsonStr, 'utf8', err=>{
	if(err)console.log('Something wrong');
	console.log('File Saved');
})