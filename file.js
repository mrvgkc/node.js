const { rejects } = require("assert");
const fs = require("fs");
const path = require("path");
const { resolve } = require("path/posix");

fs.mkdirSync(path.resolve(__dirname,"dir"),(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file");
});
fs.write(path.resolve(__dirname, "text.txt"), 'Ali Veli 1 2 3', (err) => {
    if(err){
        confirm.log(err)
    }
});
// file dosyası varsa içine veriyi ekler, yoksa oluşturur ve içine veri ekler


fs.write(path.resolve(__dirname, "text.txt"), 'Add something', (err) => {
    if(err){
        confirm.log(err)
    }
});
// ikisi birlikte çalıştırılırsa 'Ali Veli 1 2 3Add something' çıktısı olur

// dir ile iki kes klasör açmaya çalışılırsa hata verir ama üsttekinde hata vermez
// callback !!!!! promise ile çözüm bulunmustur. trycatch ne demek bak!!!!!!!//calısan kodların oldugu yer try , içinde bir hata varsa catche düşüyo
//callbackleri içi içe sıralayıop çalısmasını istediğimizde ,
//asenkron calıstırdığımız için sıralamayla çalısacak diye bir sey yok hangısının işi biterse o calışmaya baslar.
//Bu problemi çözmek için promise işin içine girer.


// //promise

// const writeFileAsync = async (path,data)=> { 
//      return new Promise((resolve,reject) => fs.writeFile(path,data,(err)=>{
//          if (err) {
//              return reject(err.message)
//          }
//          resolve()
//      }))
//      writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
//      .then(()=>writeFileAsync(path.resolve(__dirname,"text.txt"),
//        .then(()=>writeFileAsync(path.resolve(__dirname,"text.txt"),
//         .then(()=>writeFileAsync(path.resolve(__dirname,"text.txt"),
//         .catch(err=>console.log(err))
        

    //class olduğu için new kullandık.new ifadesi constructera gidip bir class ayarlıyo ve onu tetikliyor.
    //}
    
    //  const appdendFileAsync = async (path,data)=> { 
    //     return new Promise((resolve,reject) => fs.appendFile(path,data,(err)=>{
    //         if (err) {
    //             return reject(err.message)
    //         }
    //         resolve()
    //     }))
    // }
    //     appdendFileAsync(path.resolve)(__dirname,"text.txt"),'data')
    //     .then(()=>appdendFileAsync(path.resolve(__dirname,"text.txt"),
    //     .then(()=>appdendFileAsync(path.resolve(__dirname,"text.txt"),
    //     .then(()=>appdendFileAsync(path.resolve(__dirname,"text.txt"),
    //      .catch(err=>console.log(err))

//dirname önemli:iyice öğren 


// const text= "BIL 4 2 5"
// const  writeFileAsync = async (path,data)=> { 
//          return new Promise((resolve,reject) => fs.writeFile(path,data,(err)=>{
//              if (err) {
//                  return reject(err.message)
//              }
//              resolve()
//          }))

//          writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
//          .then(()=>readFileAsync(path.resolve(__dirname,"text.txt"),
//            .then(()=>data.split)
//             .then(()=>writeFileAsync(path.resolve(__dirname,"text.txt"),
//             .catch(err=>console.log(err))



//şimdiye kadar promise nın cekirdeğini  kullandık. şimdi ise daha gelişmiş halini kullanacagız.
//const fsPromise =require ('fs/promises');
const fsPromise= require('fs').promises;//üsttekiile aynı anlama gelir 

// const fileRead = async()=>{
//     try{
//         await fsPromise.writeFile(path.resolve(__dirname,"text.txt"))
//         catch{
//             //
//         }
//     }
// }//buranın devamı var 
