import React, { useContext, useEffect, useState } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { bookAppt } from '../server';
import AuthContext from '../utils/AuthProvider';
import apptIcon from '../assets/appt-icon.png'
import appt from '../assets/appt.png'

export default function BookAppt() {

  const {currUser} = useContext(AuthContext)
  const [fields, setFields] = useState({
                              FirstName:'',
                              LastName:'',
                              Email:'',
                              ContactNo:'',
                              AppointmentDate:'',
                              AppointmentTime:''
                          })
  const handleChange=(e)=>{
    setFields({...fields,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    currUser && setFields({...fields,Email:currUser.Email})
  },[currUser])
  const handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(fields)
    const res=await bookAppt(fields)
    console.log(res)
  }

  return (
    <>
      <Header />
      <div className='appt-bg'>
        <div className=' head-appt'>
          <h1 className='p-5 text-center'><img src={apptIcon} alt="" /> Book Your Appointment</h1>
        </div>
        <div className='container position-relative shadow'>
            <h3 className='m-2 pt-3 text-center'>Fill Patient Details : </h3>
          <form className='form-appt' onSubmit={handleSubmit}>
          <img src={appt} alt="" width="30%" className='appt-img' />
            <fieldset>
            
              <div className="form-group row m-2">
                <label htmlFor="FirstName" className="col-sm-2 col-form-label">First Name <span className='text-danger'>*</span></label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="FirstName" name="FirstName" onChange={handleChange} placeholder="Enter Your First Name" required />
                </div>
              </div>
              <div className="form-group row m-2">
                <label htmlFor="LastName" className="col-sm-2 col-form-label">Last Name <span className='text-danger'>*</span></label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="LastName" name="LastName" onChange={handleChange} placeholder="Enter Your LastName" required />
                </div>
              </div>
              <div className="form-group row m-2">
                <label htmlFor="age" className="col-sm-2 col-form-label">Age <span className='text-danger'>*</span></label>
                <div className="col-sm-6">
                  <input type="number" className="form-control" id="age" placeholder="Enter Your Age" required />
                </div>
              </div>
              <div className="form-group row m-2">
                <label className="col-sm-2 col-form-label">Gender <span className='text-danger'>*</span></label>
                <div className="col-sm-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="notsaid" value="notsaid" />
                    <label className="form-check-label" htmlFor="notsaid">
                      Prefer Not to say
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row m-2">
                <label htmlFor="address" className="col-sm-2 col-form-label">Address <span className='text-danger'>*</span></label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" id="address" placeholder="Address" required />
                </div>
              </div>
              <div className="form-group row m-2">
                <label htmlFor="ContactNo" className="col-sm-2 col-form-label">Contact number <span className='text-danger'>*</span></label>
                <div className="col-sm-6">
                  <input type="tel" className="form-control" id="ContactNo" name="ContactNo" onChange={handleChange} placeholder="Contact Number" required />
                </div>
              </div>
              <div className="form-group row m-2">
                <label htmlFor="AppointmentDate" className="col-sm-2 col-form-label">Appointment Date <span className='text-danger'>*</span></label>
                <div className="col-sm-6">
                  <input type="date" className="form-control" id="AppointmentDate" name="AppointmentDate" onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group row m-2">
                <h5>Slots Available : </h5>
                <div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="AppointmentTime" id="one" value="1100" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="one">
                      11:00 am
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="AppointmentTime" id="two" value="1200" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="two">
                      12:00 pm
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="AppointmentTime" id="three" value="1700" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="three">
                      5:00 pm
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="AppointmentTime" id="four" value="1900" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="four">
                      7:00 pm
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="AppointmentTime" id="five" value="1930" onChange={handleChange} />
                    <label className="form-check-label" htmlFor="five">
                      7:30 pm
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row m-2">
                <h5>Alternate slot : </h5>
                <label htmlFor="alterDate" className="col-sm-2 col-form-label">Alternate Date</label>
                <div className="col-sm-6">
                  <input type="date" className="form-control" id="alterDate" name="alterDate" onChange={handleChange} required />
                </div>
                <label>Alternate Time : </label>
                <div className="col-sm-6">
                  <input type='time' className='form-control' id='alterTime' name="alterTime" />
                </div>
              </div>
            </fieldset>
            <div className="form-group row m-2 my-3">
              <div className="my-3">
                <button type="submit" className="btn btn-success">Book Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
