import React from 'react'

export default function TeamMember({imgSrc}) {
  return (
    <>
        <div className="card card-styles shadow" style={{width: "18rem"}}>
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">Dr. Smith</h3>
                <h5>Heart Specialist</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
    </>
  )
}
