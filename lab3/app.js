const http=require('http')
const fs = require('fs');
http.createServer((req,res)=>{;
    const url = req.url;
    const method = req.method;
    if(url==='/'){
    fs.createReadStream('index.html').pipe(res);
    }
    else if (url === '/messsage' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody =Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFile('message.txt','message1.txt',()=>{
            });
        res.end('save sucessfully');
        settimeout(()=>{fs.createReadStream('index.html').pipe(res),1000});
        });
    }
}).listen(3000,()=> console.log('listening to 3000'));