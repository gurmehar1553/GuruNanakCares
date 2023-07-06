import React from 'react'

export default function Testimonial() {
  return (
    <>
        <div className='container'>
            <div className='text-center m-5'>
                <h1 className='color-head'>Testimonials</h1>
            </div>
            <div>
                <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">

                <div className="d-flex justify-content-center mb-4">
                    <button className="carousel-control-prev position-relative" type="button"
                    data-mdb-target="#carouselMultiItemExample" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next position-relative" type="button"
                    data-mdb-target="#carouselMultiItemExample" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="carousel-inner py-4">

                    <div className="carousel-item active">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head" >Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                            officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head">John Doe</h5>
                            <p>Web Developer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li>
                                <i className="fas fa-star-half-alt fa-sm"></i>
                            </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head">Maria Kate</h5>
                            <p>Photographer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head">John Doe</h5>
                            <p>UX Designer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                            officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head">Alex Rey</h5>
                            <p>Web Developer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li>
                                <i className="fas fa-star-half-alt fa-sm"></i>
                            </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head">Maria Kate</h5>
                            <p>Photographer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>


                    <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head" >Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                            officiis hic tenetur quae quaerat ad velit ab hic tenetur.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head">John Doe</h5>
                            <p>Web Developer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam, nisi ut aliquid commodi.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li>
                                <i className="fas fa-star-half-alt fa-sm"></i>
                            </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="avatar"
                            style={{width: "150px"}} />
                            <h5 className="mb-3 color-head">Nagma</h5>
                            <p>Photographer</p>
                            <p className="text-muted">
                            <i className="fas fa-quote-left pe-2"></i>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </>
  )
}
