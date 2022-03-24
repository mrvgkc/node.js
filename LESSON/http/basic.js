const http=require('http');

const PORT=3000;
const server= http.createServer((req,res)=>{
    const url = req.url;
    res.end(url);
}
)

server.listen(PORT,()=>{
    console.log(`server running ${PORT}`);
})