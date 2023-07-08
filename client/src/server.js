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
    return req
}

const getAllAppt = async () =>{
    const res = await axios.get(URL+'allAppt');
    return res.data
}

const getUnconfirmedAppt = async ()=>{
    const res = await axios.get(URL + 'showUnconfirmedAppt');
    return res.data
}

const confirmAppt = async (newObj)=>{
    const res = await axios.post(URL + 'confirmAppt',newObj)
    return res.data
}

const rejectAppt=async(newObj)=>{
    const res = await axios.post(URL + 'rejectAppt',newObj)
    return res.data
}

const showUnconfirmedForUser = async (newObj)=>{
    const req=await axios.post(URL+'showUnconfirmedApptUser',newObj, {headers: {Authorization : token }})
    return req.data
}

export {
    signup,
    login,
    verifyAuth,
    setToken,
    bookAppt,
    showAppt,
    sendMsg,
    getAllAppt,
    getUnconfirmedAppt,
    confirmAppt,
    showUnconfirmedForUser,
    rejectAppt,
    token
}