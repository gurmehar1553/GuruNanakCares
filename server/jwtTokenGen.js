require("dotenv").config()
const jwt = require('jsonwebtoken')

const generateAuthToken=(data)=>{
    data=JSON.stringify(data)
    const token = jwt.sign(data,process.env.SECRET)
    return token
}

module.exports=generateAuthToken