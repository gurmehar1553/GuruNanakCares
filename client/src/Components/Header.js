import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import AuthContext from '../utils/AuthProvider'
import userIcon from '../assets/user-icon.png'

export default function Header() {
    const {auth,setAuth,currUser} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(auth)
    console.log(currUser)
    const handleLogout=()=>{
        localStorage.clear()
        setAuth(false)
        navigate('/')
        window.location.reload(true)
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg ms-auto header-nav">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li  className="nav-item mx-5">
                            <Link className="nav-link active nav-tab mt-1" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li  className="nav-item mx-5">
                            <Link className="nav-link nav-tab mt-1" aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                        {
                            (currUser && currUser.isAdmin) ? (
                                <>
                                <li className="nav-item mx-5">
                                    <Link className="nav-link nav-tab mt-1" aria-current="page" to="/admin">Admin</Link>
                                </li>
                                </>
                            ):
                            <li></li>
                        }
                        
                        {
                            auth
                            ? (
                                <>
                                    <li  className="nav-item mx-5">
                                        <Link className="nav-link nav-tab mt-1" aria-current="page" to="/appointment">Book an Appointment</Link>
                                    </li>
                                    <li  className="nav-item mx-5">
                                        <button className="nav-link btn btn-outline-danger nav-tab mt-1" onClick={handleLogout}>Logout</button>
                                    </li>
                                    <li  className="nav-item mx-5">
                                        <Link className="nav-link nav-tab" aria-current="page" to="/profile">
                                        <img src={userIcon} alt='profile'/></Link>
                                    </li>
                                </>
                                )
                            : (
                                <>
                                <li  className="nav-item mx-5">
                                    <Link className="nav-link nav-tab mt-1" to="/login">Login</Link>
                                </li>
                                <li  className="nav-item mx-5">
                                    <Link className="nav-link nav-tab mt-1" to="/signup">Signup</Link>
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
