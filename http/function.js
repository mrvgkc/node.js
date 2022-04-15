//senkron ve asenkron calışma nedir?
//js her zaman  senkron olarak calışır ve aynı anda tek bir kod satırı calışır
//senkron çalısma modelinde bir işe baslanılıyor veo iş bıtene kadar dığer işlere başlanılmıyo
//asenkron çalısma modelinde ise aynı anda bırden fazla işlemi yapabiliyoruz.
//node.js her zaman asenkron olarak çalısır.
//node.js callback fonksiyonları yardımıyla asenkron olarak çalısır
// function makeFile(){
//     console.log('dosya olustur.')//fonksiyonu yazdırma kodu
// }
// makeFile()//fonskiyon çalıstırma kodu
//callback fonksiyon bir fonksiyona parametre olarak gelir ve ona söylenen işi yapar
//yani ana fonksiyon kendi işini yaparken bir yandan da callbaack fonksiyonunu da calıstırır.


// function makeFile(callback){
//     console.log('dosya olustur.')// ana fonksiyonun kendi işi
//     callback()//ana fonksiyo kendi işini yapmaya başladığında 
//     //callback fonkisyonu da ona ne dersek onu yapmaya başlayacak

// }
// makeFile(function(){
//     console.log('dosya olusturulmaya başlandı.')//biz burda bir geri dönüş versin istedik
// })

// //callback fonksiyonlarında veri alışverişide yapabiliriz
// function makeFile(callback){
//     console.log('dosya olustur.')
//     let file ={
//         name: 'JSFile'
//     }
//     callback(file)
// }
//     makeFile(function(mylife){
//         console.log(`${mylife.name} oluşturulmaya başlandı`)})

//arrow function

//let sum = function (x,y) {
   // return x+y
//}

//let sum =(x,y)= x+y 
// //let squared = function(x){
//     return x*x
// }
// let squared=x=>x*x

// console.log(squared(5))

// let sayName = function(name){
//     return `benim adım ${name}`
// }



// let sayName= name =>`benim adım ${name}`
// console.log(sayName('merve gökçe '))


// let sum =function(x,y){
//     result = x+y
//     return result
//}
let sum = (x,y)=>{
    result = x+y
    return result
}
console.log(sum(5,6))
