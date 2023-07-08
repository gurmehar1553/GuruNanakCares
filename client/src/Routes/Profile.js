import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../utils/AuthProvider'
import userImg from '../assets/user.jpg'
import { showAppt } from '../server'
import Footer from '../Components/Footer'
import { Admin } from './Admin'


export default function Profile() {
  const [prevAppt,setPrevAppt] = useState([])
  const {auth,currUser} = useContext(AuthContext)
  console.log("curruser-->",currUser)
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

                    </div>
                  </div>
                      <h4 className='color-head'>Appointment Schedule : </h4>
                      <div className='d-flex justify-content-around'>
                      {
                        (prevAppt && prevAppt.length > 0)?
                          prevAppt.map((a,i)=>{
                            return (
                              <div className='p-3 shadow bg-success bg-opacity-10'>
                                  <h5>Patient Number : {i+1}</h5>
                                  <p>Patient's name: {a.FirstName + " " + a.LastName}</p>
                                  <p>Appointment Date: {a.AppointmentDate}</p>
                                  <p>Appointment Time: {a.AppointmentTime}hrs</p>
                                  <p>Appointment Status : {
                                      (a.confirm)?'Confirmed':'Pending'
                                    }
                                  </p>
                              </div>
                            )
                          }):
                          <p>No Scheduled appointment</p>
                      }
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
    </>
  )
}
