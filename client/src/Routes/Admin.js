import React, { useEffect, useState } from 'react'
import './Admin.css'
import { confirmAppt, getAllAppt, getUnconfirmedAppt, rejectAppt, removeAppt, removeFromUnconfirmedAppt } from '../server'
import  {ToastContainer, toast}  from 'react-toastify';


const Admin = () => {
    const [apptData, setApptData] = useState([])
    const [unconfirmedAppt,setUnconfirmed] = useState([])
    useEffect(()=>{
        getAllAppt().then((res)=>{
            console.log(res)
            return res
        }).then(res=>{
            setApptData(res)
        })
    },[])

    useEffect(()=>{
        getUnconfirmedAppt().then((res)=>{
            return res
        }).then(res=>{
            setUnconfirmed(res)
        })
    },[])
    
    const handleConfirm =async (appt)=>{
        toast.success("Appointment is Confirmed !", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose : 4000
      })
        console.log(appt)
        const res1 = await confirmAppt(appt)
        // window.location.reload(true)
        setTimeout(()=>{
            window.location.reload(true)
          },9000)
    }

    const handleReject=async (appt)=>{
        alert("Rejected the appointment booking")
        const ans=await rejectAppt(appt)
    }

    const handleRemove = async (appt) => {
        const res = await removeAppt(appt)
        console.log(res)
        toast.success('Appointment marked as done!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose : 4000
      })
      setTimeout(()=>{
        window.location.reload(true)
      },4000)
    }

  return (
    <>
        <div>
            <h2>Unconfirmed Appointments</h2>
            <table className='my-5'>
                <tr>
                    <th className='admin-details'>S.No.</th>
                    <th className='admin-details'>Appointment Id</th>
                    <th className='admin-details'>Patient's Name</th>
                    <th className='admin-details'>Email</th>
                    <th className='admin-details'>Contact Number</th>
                    <th className='admin-details'>Appointment Date</th>
                    <th className='admin-details'>Appointment Time</th>
                    <th className='admin-details'>Status</th>
                </tr>
                {
                    (unconfirmedAppt.length > 0)?(
                        unconfirmedAppt.map((appt,i)=>{
                            console.log(typeof(appt))
                            return (
                                <tr>
                                    <td className='admin-details'>{i+1}</td>
                                    <td className='admin-details'>{appt._id}</td>
                                    <td className='admin-details'>{appt.FirstName} {appt.LastName}</td>
                                    <td className='admin-details'>{appt.Email}</td>
                                    <td className='admin-details'>{appt.ContactNo}</td>
                                    <td className='admin-details'>{appt.AppointmentDate}</td>
                                    <td className='admin-details'>{appt.AppointmentTime}</td>
                                    <td className='admin-details'>
                                    <ToastContainer />
                                        <button className='btn btn-success mx-2' onClick={()=>{
                                            console.log(appt)
                                            return handleConfirm(appt)}}>Confirm</button>
                                        <button className='btn btn-danger' onClick={()=>handleReject(appt)}>Reject</button>
                                    </td>
                                </tr>
                            )
                        })
                    )
                    : <div className='m-auto'>No Unconfirmed Appointments Yet</div>
                }
            </table>
            <h2 className='my-3'>Appointments</h2>
            <table border='1' className='my-5 table table-striped'>
                <tr>
                    <th className='admin-details'>S.No.</th>
                    <th className='admin-details'>Appointment Id</th>
                    <th className='admin-details'>Patient's Name</th>
                    <th className='admin-details'>Email</th>
                    <th className='admin-details'>Contact Number</th>
                    <th className='admin-details'>Appointment Date</th>
                    <th className='admin-details'>Appointment Time</th>
                    <th className='admin-details'>Status</th>
                </tr>
                {
                    (apptData.length > 0)? (
                        apptData.map((appt,i)=>{
                            return (
                                <tr>
                                    <td className='admin-details'>{i+1}</td>
                                    <td className='admin-details'>{appt._id}</td>
                                    <td className='admin-details'>{appt.FirstName} {appt.LastName}</td>
                                    <td className='admin-details'>{appt.Email}</td>
                                    <td className='admin-details'>{appt.ContactNo}</td>
                                    <td className='admin-details'>{appt.AppointmentDate}</td>
                                    <td className='admin-details'>{appt.AppointmentTime}</td>
                                    <td className='admin-details'>
                                    <ToastContainer />
                                        <button title='Click here to mark appointment is over' className='btn btn-warning' onClick={()=>{handleRemove(appt)}}>Pending</button>
                                    </td>
                                </tr>
                            )
                        })
                    )
                    : ''
                }
            </table>
        </div>
    </>
  )
}

export default Admin