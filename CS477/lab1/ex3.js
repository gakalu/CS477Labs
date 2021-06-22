// Fix the slow function to be asynchronous/non-blocking
function slow(callback){ 
	for(let i=0; i<= 5e8; i++){}
	if (Math.random() > 0.5) { 	
		return callback("Error",null) 
	} 
	callback(null, {id:12345}) 
} 

function exec(fn){ 
	// Complete the code here to implement chaining with callback
    let mainobj = {};

    fn((err, data)=>{
        mainobj.done = function (callback) {
            if (err === null) {
                callback(data);
            }
            return this;
        }
        mainobj.fail = function (callback) {
            if (err !== null) {
                callback(err);
            }
            return this;
        }
    });
    return mainobj;
}

exec(slow).done(function(data){ console.log(data); })
	.fail(function(err){ console.log("Error: " + err); }); 