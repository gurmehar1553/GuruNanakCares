import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './SignUp.css';
import signUpImage from '../assets/signUpImage.png'
import signUpAvatar from '../assets/signUpAvatar.png'
import wave from '../assets/wave.jpg'
import { signup } from '../server';
import Header from '../Components/Header';

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

// const handleSignup=()=>{
//     fetch('http://localhost:5090/signup',{
//       method:'POST',
//       headers:{
//         'Content-type':'application/json'
//       },
//       body:JSON.stringify(Value)
//     }).then(()=>{
//       console.log('CHAL gya')
//       navigate('/login')
//     }).catch((err)=>{
//       console.log(err,"errr")
//     })
//    }
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
        // <div className='text-center my-5'>
        //     <h2 className='my-5'>Sign Up</h2>
        //     <form action="">
        //     <input type="text"  placeholder='First Name' onChange={changes} name='FirstName'/>
        //     <br />
        //     <br /> 
        //     <input type="text"  placeholder='Last Name' onChange={changes} name='LastName'/>
        //     <br />
        //     <br />
        //     <input type="text" placeholder='Email' onChange={changes} name='Email'/>
        //     <br />
        //     <br />
        //     <input type="password" placeholder='Password' onChange={changes} name='Password'/>
        //     <br />
        //     <br />
        //     </form>
        //   <button onClick={handleSignup}>Submit</button>
        //   <br /><br />

        //   <Link to="/login">Login Page </Link>
        // </div>
		<>
		<Header />
		<div>
			<img className="wave" src={wave}/>   
        <div className="containerkavya">
		<div className="img">
        <img src={signUpImage} alt='img' />
		</div>
		<div className="login-content">
			<form className='formm' onSubmit={handleSignup}>
            <img src={signUpAvatar} alt='img' />
				{/* <h3 className="title">Welcome</h3> */}
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
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btnSign" value="Sign Up"/>
            </form>
			<p >Already have an account? <Link to="/login">LogIn</Link></p>
        </div>
    </div>
	
	</div>
	</>
    )
}
export default SignUp