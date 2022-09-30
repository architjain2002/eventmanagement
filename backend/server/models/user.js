const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    flag:{
        type:Boolean //0->participant, 1-> admin
    },
    userEvents:{
        type:Array
    }
});

module.exports=mongoose.model('Users',userSchema);