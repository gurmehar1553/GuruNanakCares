import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './SignUp.css';
import signUpImage from '../assets/signUpImage.png'
import signUpAvatar from '../assets/signUpAvatar.png'
import { signup } from '../server';

const SignUp=()=>{
	const navigate = useNavigate()
    const [Value, setValue] = useState({
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
    });
	const changes=e=>{
		setValue({...Value,[e.target.name]:e.target.value})
		console.log(Value)
	}


	const handleSignup = (e) => {
        e.preventDefault()
        const res = signup(Value);
        if(res === false){
            alert("Username already exists")
            return
        }
        res && navigate('/login')
    }
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

    return(
		<>
			<div className='container loginSignupContainer'>
				<div className="containerkavya shadow">
					<div className="login-content">
						<form className='formm' onSubmit={handleSignup}>
							<img src={signUpAvatar} alt='img' />
							<div className="input-div one">
							<div className="i"> 
									<i className="fas fa-user"></i> 
								</div>
							<div className="div">
									{/* <h5>Username</h5> */}
									<input type="text" className="input" name='FirstName' onChange={changes} placeholder="First Name"/>
							</div>
							</div>
							<div className="input-div one">
							<div className="i"> 
									<i className="fas fa-user"></i> 
								</div>
							<div className="div">
									{/* <h5>Username</h5> */}
									<input type="text" className="input" name='LastName' onChange={changes} placeholder="Last Name"/>
							</div>
							</div>
							<div className="input-div one">
							<div className="i"> 
									<i className="fas fa-user"></i> 
								</div>
							<div className="div">
									{/* <h5>Username</h5> */}
									<input type="text" className="input" name='Email' onChange={changes} placeholder="Email"/>
							</div>
							</div>
							<div className="input-div pass">
							<div className="i"> 
									<i className="fas fa-lock"></i>
							</div>
							<div className="div">
									{/* <h5>Password</h5> */}
									<input type="password" className="input" name='Password' onChange={changes} placeholder="Password"/>
							</div>
							</div>
							<div className='p-4'>
								<input type="submit" className="btnSign" value="Sign Up"/>
							</div>
							<div className='d-flex justify-content-between'>Already have an account?
								<Link to="/login">LogIn</Link>
							</div>
						</form>
					</div>
					<div className="img">
						<img src={signUpImage} alt='img' />
					</div>
				</div>
			</div>
		</>
    )
}
export default SignUp