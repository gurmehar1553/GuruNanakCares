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
    ContactNo:{
        type:String,
        require:true
    },
    AppointmentDate:{
        type:String,
        require:true
    },
    AppointmentTime:{
        type:String,
        require:true
    }
})

const Appointment = mongoose.model('Appointment',userSchema)
module.exports=Appointment
