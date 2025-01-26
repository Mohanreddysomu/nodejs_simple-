const {createReadStream }=require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
   const stream=createReadStream('ten.txt',{ highWaterMark:4000,encoding:'utf8'});
   stream.pipe(res);
})
server.listen(5000,()=>{
  console.log(`server is listerning in port:5000`);
})