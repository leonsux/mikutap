const http = require('http');
const fs = require('fs');
const mime = require('mime');

const server = http.createServer((req, res) => {
  let source_path = '.' + req.url;
  source_path = source_path === './' ? './index.html' : source_path;
  fs.stat(source_path, err => {
    if (err) return;
    res.writeHead(200, { "Content-Type": mime.getType(source_path) });
    let content = fs.readFileSync(source_path);
    res.end(content);
  });
})

server.listen(3000, ()=>{
    console.log("server running in http://localhost:3000 ...")
})