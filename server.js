const http= require("http");
const server = http.createServer((req,res)=>{
    if(req.url === "/status"){
        res.end("champion is online");
    }
    res.end("Hello champion");
});

server.listen(9999);

