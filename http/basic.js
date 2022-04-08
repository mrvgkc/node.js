//request:istek yaptığımız kısım,istekte bulunup cevap bekliyoruz
//http bir istekte bulunduğu zaman mutlaka bir cevap almak ister
//requestte get metodu kullanılır:sadece bir url yazıp entera basmamızla başlayan bir olaydır
//request içinde metodlar var 
//get:sql deki select metodu gibi okuma işlemi yapıyo:verileri listelemek içinkullanılır
//post:ınsert:sunucuya veri gönderme ve ekleme için kullanılır
//put:update:var olan bir veriyi değiştirmek güncellemek için kullanılır
//patch:update:verinin sadece kısmi bir alanını güncellemek 






//response:cevap
//response:browser sunucu tarafından olusturulup 
//göndeerilen bu response nesnesinin body kısmındaki 
//html veriyi parse ederek web sayfasının içeriğini kullanıcıya gösterir
//response:o anki durumla alakalı basarılı olup olmadıgımızı belirtir
//response kodlar
//200,301,302,404(bizim tarafımızla alakalı hata),500(server tarafı ile alakalı hata )


const http=require('http');

const PORT=3000;
const server= http.createServer((req,res)=>{//http yi yazarken create server ile stream oluşturuyolsr ve bu stream ile datayı bize veriyolar bizim oluştumus olduğumuz sanal serveri dinliyolar
//http kısmı browser kısmı (yazdığımız parametrenın ilki req ikinci)
    // const url = req.url;
    // res.end(url);
    res.statusCode=200;
    // res.setHeader('content-type','text/plain');
    // res.end('helllooooooo');

    // res.setHeader('content-type','text/html');
    // res.end('<h1>helllooooooo</h1>');

    // res.setHeader('content-type','application/json');//content type json datası olarak verilen responsenin headerını json olarak bize çeviriyo
    // res.end(JSON.stringify([{id:1,name:'bıl2425'}]));


    res.writeHead(200,{'content-type':'trext/plain'});
    res.end('asd');

    
    
}

)

server.listen(PORT,()=>{  //3000 olan portu dinliyor

    console.log(`server running ${PORT}`);
})
//`altgr ve noktalı virgül ile oluyor`
