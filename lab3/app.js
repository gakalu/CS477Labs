http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
    fs.createReadStream('index.html').pipe(res);

    }else if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody =Buffer.concat(body).toString();
            const text=parsedBody.split('=');
            fs.writeFile('message.txt',`${text[1]}`,()=>{
            });
        });
        
        fs.createReadStream('index.html').pipe(res);   
    }
    else{
    res.end("404 page does not found");
    }
}).listen(3000,()=> console.log('listening to 3000'));
