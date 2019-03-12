import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Instructors extends Component {
  render() {
    return (
      <section className=" instructor bg-light">
        <div className="call-to-action pv-40 text-center">
          <h2 className="title">Our Instructors</h2>
          <div className="separator mb-20"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 cols text-center">
              <div className="instructor--img"><img className="img-responsive" src="/images/education-9.jpg" alt=""/></div>
              <h5>Instructor Name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <Link to="#">Profile</Link>
            </div>
            <div className="col-md-3 col-sm-6 cols text-center">
              <div className="instructor--img"><img className="img-responsive" src="/images/education-9.jpg" alt=""/></div>
              <h5>Instructor Name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <Link to="#">Profile</Link>
            </div>
            <div className="col-md-3 col-sm-6 cols text-center">
              <div className="instructor--img"><img className="img-responsive" src="/images/education-9.jpg" alt=""/></div>
              <h5>Instructor Name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <Link to="#">Profile</Link>
            </div>
            <div className="col-md-3 col-sm-6 cols text-center">
              <div className="instructor--img"><img className="img-responsive" src="/images/education-9.jpg" alt=""/></div>
              <h5>Instructor Name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <Link to="#">Profile</Link>
            </div>
            <div className="col-md-3 col-sm-6 cols text-center">
              <div className="instructor--img"><img className="img-responsive" src="/images/education-9.jpg" alt=""/></div>
              <h5>Instructor Name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <Link to="#">Profile</Link>
            </div>
            <div className="col-md-3 col-sm-6 cols text-center">
              <div className="instructor--img"><img className="img-responsive" src="/images/education-9.jpg" alt=""/></div>
              <h5>Instructor Name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <Link to="#">Profile</Link>
            </div>
            <div className="col-md-3 col-sm-6 cols text-center">
              <div className="instructor--img"><img className="img-responsive" src="/images/education-9.jpg" alt=""/></div>
              <h5>Instructor Name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <Link to="#">Profile</Link>
            </div>
            <div className="col-md-3 col-sm-6 cols text-center">
              <div className="instructor--img"><img className="img-responsive" src="/images/education-9.jpg" alt=""/></div>
              <h5>Instructor Name</h5>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
              <Link to="#">Profile</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
