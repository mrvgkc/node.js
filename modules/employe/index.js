let sayName=require('./sayName') //require:değişken tanımı gerekli,istemek
let sayAge=require('./sayAge')
module.exports = {
        sayName : sayName,
        sayAge  : sayAge
}
