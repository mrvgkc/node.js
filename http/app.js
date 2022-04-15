//express:bir kütüphanedir.node.jsi oluşturduğumuz web programları daha kolay oluşturmamızı sağlar 

const express = require('express')
const app = express()
const port = 3000
const hostname='127.0.0.1'

app.get('/',(req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))})

    app.get('/about',(req, res) => {
        res.sendFile(path.resolve(__dirname,'about.html'))})

        app.get('/contact',(req, res) => {
            res.sendFile(path.resolve(__dirname,'contact.html'))})
        
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,hostname, () => {
  console.log(`server çalısıyor, http://${hostname}:${port}`)
})

//node.js ile kendi sunucumuzu oluşturucaz
//protocol:server ve clientin uyması gereken kurallara protocol deniyor
//TCP:veri iletimi protokolu
//ıp:tüm bilgisayarların faeklı pcler taranfından tanınmasını sağlayan adres
//port:
//req=request
//res:response

// const http= require('http')//http  yi require ettik ve bunu http denilen bir değişkene atadık

// const hostname='127.0.0.1'
// const port = 3000
// const server = http.createServer((req,res) => {
// console.log(req.url)
// res.statusCode=200
// res.setHeader('content-type','test/plain')
// res.end('hello node.js')
//  })
//  server.listen(port,hostname,()=>{
//      console.log(`server çalısıyor, http://${hostname}:${port}/`)
//  })


// const http= require('http')//http  yi require ettik ve bunu http denilen bir değişkene atadık
// const { url } = require('inspector')

// const hostname='127.0.0.1'
// const port = 3000

// const server = http.createServer((req,res) => {
// if(req.url==='/'){
//     return res.end('home page')
// }
// else if(req,url==='/about'){
//     return res.end('about page')
// }
// else if(req.url==='/contact'){
//     return res.end('contact page')
// }
// else{
//     res.statusCode=400
//     res.end('sayfa bulunamadı')
// }
// res.statusCode=200
// res.setHeader('content-type','test/plain')
// res.end('hello node.js')
//  })
//  server.listen(port,hostname,()=>{
//      console.log(`server çalısıyor, http://${hostname}:${port}/`)
//  })


// const http= require('http')//http  yi require ettik ve bunu http denilen bir değişkene atadık
// const fs =require('fs')

// const hostname='127.0.0.1'
// const port = 3000

// const indexPage= fs.readFileSync('index.html')//readFileSync metodu yardımıyla  index.htmli bir tane değişkene gönderiyorum(indexpage)
// //sync ifadesi senkron olarak çalıştığını belirtir

// const aboutPage= fs.readFileSync('about.html')
// const conctactPage= fs.readFileSync('contact.html')
// const notFoundPage=fs.readFileSync('404.html')



// const server = http.createServer((req,res) => {
// if(req.url==='/'){
//     return res.end(indexPage)
// }
// else if(req,url==='/about'){
//     return res.end(aboutPage)
// }
// else if(req.url==='/contact'){
//     return res.end(conctactPage)
// }
// else{
//     res.statusCode=400
//     res.end(notFoundPage)
// }
// res.statusCode=200
// res.setHeader('content-type','test/plain')
// res.end('hello node.js')
//  })
//  server.listen(port,hostname,()=>{
//      console.log(`server çalısıyor, http://${hostname}:${port}/`)
//  })