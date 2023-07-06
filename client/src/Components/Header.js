import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import AuthContext from '../utils/AuthProvider'

export default function Header() {
    const {auth,setAuth} = useContext(AuthContext)
    console.log(auth)
    const handleLogout=()=>{
        localStorage.clear()
        setAuth(false)
    }
    useEffect(()=>{},[auth])
  return (
    <>
      <nav className="navbar navbar-expand-lg ms-auto header-nav">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-5">
                            <Link className="nav-link active nav-tab" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link nav-tab" aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link nav-tab" aria-current="page" to="/appointment">Book an Appointment</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link nav-tab" aria-current="page" to="/profile">Profile</Link>
                        </li>
                        
                        {
                            auth
                            ? (<li className="nav-item mx-5">
                                    <button className="nav-link btn btn-outline-danger nav-tab" onClick={handleLogout}>Logout</button>
                                </li>
                                )
                            : (
                                <>
                                <li className="nav-item mx-5">
                                    <Link className="nav-link nav-tab" to="/login">Login</Link>
                                </li>
                                <li className="nav-item mx-5">
                                    <Link className="nav-link nav-tab" to="/signup">Signup</Link>
                                </li>
                                </>
                        )
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
