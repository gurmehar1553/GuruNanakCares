import React, { useContext, useState } from "react";

import './SignUp.css';
import loginP from '../assets/loginP.png'
import signUpAvatar from '../assets/signUpAvatar.png'
import wave from '../assets/wave.jpg'
import { login,setToken } from "../server";
import { useNavigate } from "react-router-dom";
import AuthContext from "../utils/AuthProvider";
import Header from "../Components/Header";

const Login=()=>{
	const navigate = useNavigate()
	const [initial, setInitital] = useState({
		Email:'',
		Password:''
	});
	const {auth,setAuth,setCurrUser} = useContext(AuthContext)
	const changeHandler=e=>{
		setInitital({...initial,[e.target.name]:e.target.value})
		console.log(initial)
	}

	const handleLogin=async (e)=>{
		e.preventDefault()
		console.log(initial)
			const res = await login(initial);
			console.log("Response : ",res)
			setToken(res.token)
			setAuth(true)
			setCurrUser(res.userData)
			console.log(auth)
			res && navigate('/')
	}

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


    return(
		<>
       <div>
	   <Header />
        <img className="wave" src={wave} alt="img"/>
       
        <div className="containerkavya">
		
		<div className="login-content">
			<form onSubmit={handleLogin} className="formm">
				<img src={signUpAvatar} alt="img"/>
				<h3 className="title">Welcome</h3>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		{/* <h5>Username</h5> */}
           		   		<input type="email" className="input" name="Email" onChange={changeHandler} placeholder="Email"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	{/* <h5>Password</h5> */}
           		    	<input type="password" className="input" name="Password" onChange={changeHandler} placeholder="Password"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btnSign" value="Login"/>
            </form>
        </div>
        
        <div className="img">
        
			<img src={loginP} alt="img"/>
     
		</div>
   
    </div>

    </div>
	</>
    )
}
export default Login