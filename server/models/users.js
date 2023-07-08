const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    FirstName:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean
    },
    appointments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Appointment'
    }]
})

const User = mongoose.model('User',userSchema)
module.exports=User
