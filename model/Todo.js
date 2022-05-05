const {Schema,model}=require('mongoose')

const schema = new Schema({
    title:{//title tipi string bir değer olmalı boş geçilemez yani sql gibi düşün boş bırakılmaz 
        type:String,
        required:true
    },

completed:{
    type:Boolean,//boolen deeğr tanımdağımızda bir default değer atamalıyız genelde false değeri atanır 
    default:false
}


})
module.exports=model('Todo',schema)//todo tablonun ismi 