require("dotenv").config()
const  express=require('express')
const mongoose = require('mongoose')
const User = require('./models/users')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const cors=require('cors')
const generateAuthToken = require("./jwtTokenGen")
const nodemailer=require('nodemailer')
const xoauth2 = require('xoauth2')

// const jwt = require('jsonwebtoken')
const authorization = require("./utils/middleware")
const Appointment = require("./models/appoint")

const app = express()

app.use(cors())
app.use(bodyParser.json(),bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connected")
}).catch((e)=>{
    console.log(e)
})

app.get('/',(req,res)=>{
    res.send("hello")
})


app.post('/signup',async (req,res)=>{
    const {FirstName,LastName,Email,Password} = req.body;
    const user = await User.find({Email})
    if(user.Email ){
        return res.send(false)
    }
    const saltRounds = 10
    const pwdHash = await bcrypt.hash(Password,saltRounds)
    const newUser = new User({
        FirstName,
        LastName,
        Email,
        Password : pwdHash
    })
    const savedUser = await newUser.save()
    res.send(true)
})

app.post('/login', async (req,res) => {
    const userInfo = req.body
    console.log(userInfo)
    let userData
    try{
        userData = await User.findOne({Email:userInfo.Email})
        console.log(userData)
    }
    catch(err){
        console.log(err)
    }
    if(!userData){
        res.status(401).send({msg:"User not found"})
    }
    else{
        const validPassword = await bcrypt.compare(userInfo.Password,userData.Password).catch((err)=>{
            console.log(err,"err while matching pwd")
            res.status(500).send({msg:"Internal Server Error"})
        })
        console.log(validPassword)
        if(!validPassword){
            res.send({msg:"Invalid Password"})
        }

        const token = generateAuthToken(userData)
        res.status(200).json({
            token,
            userData,
            msg:"Logged in successfully"
        })
    }
})

app.get('/login',authorization, async (req,res,next)=>{
    const {authData} = req
    const {authStatus,user,err} = authData
    if(!authStatus){
        res.json({authStatus, user:null,err})
    }
    else{
        res.json({authStatus,user,err})
    }
})

app.post('/bookAppt', async (req,res)=>{
    const apptData = req.body
    console.log(apptData)
    // const appt = await Appointment.findOne({Email:apptData.Email})
    const newAppt = new Appointment(apptData)
    await newAppt.save()
    res.send('Booked Appointment Successfully')
})

app.post('/confirmAppt', async (req,res)=>{
    const appt = req.body
    console.log('new appt ---- ',appt)
    const findAppt = await Appointment.findOne({_id : appt._id})
    // const findUser = await User.findOne({Email : appt.Email})
    // console.log("finduser--.",findUser)
    if(findAppt !== null){
        findAppt.confirm = true
        const result = await findAppt.save()
        console.log("result",result)
        // if(findUser !== null){
        //     findUser.appointments.push(findAppt)
        //     await findUser.save()
        // }
        res.send('Booked Appointment Successfully')
    }
    
})

app.post('/rejectAppt',async (req,res)=>{
    const appt = req.body
    const reject = await Appointment.deleteOne({Email:appt.Email})
    res.send('rejected')
})

app.post('/showAppt',authorization,async (req,res)=>{
    const currUser = req.authData.user
    console.log(currUser)
    const prevAppt = await Appointment.find({Email: currUser.Email})
    console.log("I need this--->",prevAppt)
    if(prevAppt.length>0){
        res.json(prevAppt)
    }
    else{
        res.send(false)
    }
})

app.post('/apptOver', async (req,res)=>{
    const appt = req.body
    const ans = await Appointment.deleteOne({_id:appt._id})
    console.log(ans)
    res.send(true)
})

// app.post('/showUnconfirmedApptUser',authorization , async (req,res)=>{
//     const currUser=req.authData.user
//     const appt = await UnconfirmedAppt.findOne({Email : currUser.Email})
//     if(appt !== null){
//         res.json(appt)
//     }
//     else{
//         res.send(false)
//     }
// })

app.get('/allAppt', async (req,res)=>{
    const appt = await Appointment.find({})
    const data = appt.filter(a=>{
        return a.confirm===true
    })
    res.json(data)
})

app.get('/showUnconfirmedAppt' , async (req,res)=>{
    const appt = await Appointment.find({})
    const data = appt.filter(a=>{
        return a.confirm===false
    })
    console.log(data)
    res.json(data)
})

app.post('/sendMsg' , async (req,res) => {
    console.log(req);
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'healthcarewellnesshub@gmail.com', 
            pass:'abc123xyz!@#'
            }
    });
    let mailOptions = {
        from: 'healthcarewellnesshub@gmail.com',
        to: 'gurmeharkaur01@gmail.com',
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, function(e, r) {
        if (e) {
            console.log(e);
            res.send(false)
        }
        else {
            console.log(r);
            res.send(true)
        }
        transporter.close();
        });
})

app.listen(5090,()=>{
    console.log('Server running on port 5090')
})