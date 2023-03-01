import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className="lead mb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo temporibus vitae neque vel, quod similique quam architecto maiores quos quidem nam. Mollitia ipsum, reiciendis temporibus hic asperiores ad distinctio ullam?
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About