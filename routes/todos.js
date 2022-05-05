const {Router}=require("express")//expressin içindeki methodların sadece bir ksımını alacaksak bu şekilde süslü parantez içinde yazarız.
const res = require("express/lib/response")
const Todo=require("../model/Todo")//todoyu export ettik simdi burda kullanıcaz 



const router=Router() //index sayfasına hitap ediyor
router.get('/',async (req,res)=>{//todo list olduğu için içindeki listeleri cekicez,database işlemleri için async yaptık 
    const  todos = await Todo.find({}).lean()
    
  
    res.render('index',{  //templaitingi çalıstırmak render demektir//index olan yere gitsin ve bu alt kısmı çalıstırsın //index.hbs ye gönderir
        title:'Todo List',//index sayfasına bir obje gönderioyruz
        isIndex:true,
        todos
    })
})

router.get('/create',(req,res)=>{//create sayfasına hitap ediyor
    res.render('create',{//creati render et ve alt tarafı çalıstır 
        title:'create List',
        isCreate:true
    })
})

//buttona bastığımız zaman bu kısım çalısır
//url içinde params ile gönderilir 
//html içerisinde ise body ile göderilir
router.post('/create',async(req,res)=>{
const todo= new Todo({
    title:req.body.title,
})
await todo.save()
res.redirect('/')//işlemi yap ve parantez içine gir 

})

router.post('/complete',async(req,res)=>{
    const todo= await Todo.findById(req.body.id)
    todo.completed = !todo.completed;//ünlem databaseden ne gelirse gelsin(true yada false)onu tersine cevirir true ise false , false ise true
    await todo.save()
})

module.exports=router