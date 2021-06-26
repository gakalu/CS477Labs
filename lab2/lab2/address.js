// Accessing dns module
const dns = require('dns');

callback=(err,address) =>console.log(address);// ["192.249.118.206"]

dns.resolve4( 'www.miu.edu',callback);