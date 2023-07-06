import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../utils/AuthProvider'
import Header from '../Components/Header'
import userImg from '../assets/user.jpg'
import { Link } from 'react-router-dom'
import { showAppt } from '../server'
import Footer from '../Components/Footer'

export default function Profile() {
  const [prevAppt,setPrevAppt] = useState('')
  const {auth,currUser} = useContext(AuthContext)
  console.log(currUser)
  useEffect(()=>{
    showAppt(currUser).then((res)=>{
      console.log("------>",res)
      setPrevAppt(res)
    })
  },[])
  const WithoutLogin=()=>{
    return (
          <div className='row m-5' style={{height:'35vh'}}>
              <div className='col-md-6'>
                <h1>Kindly Login to see your profile</h1>
              </div>
          </div>
        )
  }
  return (
    <>

      <Header />
        <div className='container'>
          
            {
              (auth)? 
                (
                  <>
                  <div className='row m-5 p-3 justify-content-around'>
                    <div className='col-md-4 user-div'>
                      <img src={userImg} alt='' width="70%" />
                    </div>
                    <div className='col-md-6 m-3 shadow p-3 bg-success bg-opacity-10'>
                      <h1 className='color-head'>My Profile</h1>
                      <h2 className='color-head'>Name : {currUser.FirstName} {currUser.LastName}</h2>
                      <h2 className='color-head'>Email : {currUser.Email} </h2>
                      <h4 className='color-head'>Appointment Schedule : </h4>
                      {
                        (!prevAppt)?<p>No Scheduled appointment</p>
                        : <div>
                          <p>Patient's name: {prevAppt.FirstName + " " + prevAppt.LastName}</p>
                          <p>Appointment Date: {prevAppt.AppointmentDate}</p>
                          <p>Appointment Time: {prevAppt.AppointmentTime}hrs</p>
                        </div>
                      }
                      
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div>
                      <h2>Previous Prescriptions: </h2>
                      No Previous Prescriptions
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <h4>Appointment with Doctors: </h4>
                  </div>
                  </>
                ) : <WithoutLogin />
            } 
            
          </div>
          <Footer />
    </>
  )
}
