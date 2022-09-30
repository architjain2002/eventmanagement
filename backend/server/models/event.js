const mongoose=require('mongoose')

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    participant:{
        type:Number,
        required:true,
    },
    venue:{
        type:String,
    }
});

module.exports=mongoose.model('Event',eventSchema);