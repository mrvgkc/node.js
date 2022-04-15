
//event fırlatmak:içindeki fonksiyonun geriye değer dondurmesi:bir olay var ve gerceklesmesini istediğimiz zaman aralığı var.biz istersek nu
//bu olayın zaman aralığını set edebiliriz.


const Emitter= require('events');
//emitter diye bir nesne var.




const emitter= new Emitter();

//bir event olusturmak istersek 
emitter.on('message',(data,second)=>{
    console.log(data);
    console.log(second);
})
const MSG="mesaj";
emitter.emit('message',MSG,222);