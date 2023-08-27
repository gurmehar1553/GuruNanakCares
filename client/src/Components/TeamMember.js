import React from 'react'

export default function TeamMember({img,name,description,specialization}) {
  return (
    <div className='col-md-3 p-3'>
        <div className=" card card-styles shadow">
            {/* <img src={img} className="card-img-top" alt="doctor_image" /> */}
            <div className="card-body">
                <h3 className="card-title">Dr. {name}</h3>
                <h5>{specialization}</h5>
                <p className="card-text">
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}
