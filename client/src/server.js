import axios from 'axios'

const URL ='http://localhost:5090/'

let token = null
const localToken = window.localStorage.getItem('authToken')
const setToken = (jwt) => {
    token = `bearer ${jwt}`
    console.log("token : ",token)
    window.localStorage.setItem('authToken',jwt)
}

if(localToken){
    setToken(localToken)
}

const verifyAuth = async () => {
    console.log("token : ",token)
    const res = await axios.get(URL + 'login', {headers: {Authorization : token }})
    return res.data
}

const signup = async (newObj) => {
    const req = await axios.post(URL+'signup',newObj)
    return req.data
}

const login = async (newObj) => {
    const req = await axios.post(URL+'login',newObj)
    return req.data
}

const bookAppt = async (newObj)=>{
    const req = await axios.post(URL+'bookAppt',newObj)
    return req.data
}

const showAppt = async (newObj)=>{
    const req=await axios.post(URL+'showAppt',newObj, {headers: {Authorization : token }})
    return req.data
}

const sendMsg = async (newObj)=>{
    const req=await axios.post(URL+'sendMsg',newObj);
}

export {
    signup,
    login,
    verifyAuth,
    setToken,
    bookAppt,
    showAppt,
    sendMsg,
    token
}