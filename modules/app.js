//app.js nin burda görevi script başlatıcıdır
let employe = require('./employe.js');//require fonksiyonu string parametresi alır.
//app.js terminale çıktı verebilmek için employe.js ihtiyac duyar 
employe.sayName('merve')
employe.sayAge(19)
//tüm modülü terminalde yazdırmak istersek değişkenin adıyla js nin adı aynı olmalıdır 
//employe burdaki adı 
//employe js de modulu exports ettikten sonra app e dönüp yazdırırz
//tek bir modulu terminalde gormek istersek değişkenin adını js ile aynı adda olmak zorunda değil 