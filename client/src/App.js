import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import BookAppt from './Routes/BookAppt'
import Login from './Routes/Login'
import Signup from './Routes/Signup'
import Home from './Routes/Home'
import AboutUs from './Routes/AboutUs'
import ContactUs from './Routes/ContactUs/ContactUs'
import Profile from './Routes/Profile'
import Admin from './Routes/Admin'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AuthContext, {AuthProvider} from './utils/AuthProvider'

function ProtectedRoute(){
  const {auth} = useContext(AuthContext);
  return(
    <>
      {auth
      ?<Outlet />
      :<Navigate to='/login' />
      }
    </>
  )
}

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path='/profile' element={<><Profile /><Footer/></>}/>
                <Route path='/appointment' element={<><BookAppt /><Footer/></>}/>
              </Route>
              <Route path='/' element={<><Home /><Footer/></>}/>
              <Route path='/about' element={<><AboutUs /><Footer/></>}/>
              <Route path='/contact' element={<ContactUs />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/admin' element={<Admin />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  )
}
