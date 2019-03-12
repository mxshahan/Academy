import React, { Component } from 'react'
import Signup from '../Signup'

const bannerStyle = {
  backgroundImage: "url('images/page-about-banner-1.jpg')",
  backgroundPosition: "50% 27%"
}

export default class BecomeInstructor extends Component {
  render() {
    return (
      <div>
        <div className="banner dark-translucent-bg" style={bannerStyle}>
          <div className="breadcrumb-container">
              <div className="container">
                  <ol className="breadcrumb">
                      <li><i className="fa fa-home pr-10"></i><a className="link-dark" href="index.html">Home</a></li>
                      <li className="active">Become an Instructor</li>
                  </ol>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-md-8 text-center col-md-offset-2 pv-20">
                      <h3 className="title logo-font " data-animation-effect="fadeIn" data-effect-delay="100">Become an <span className="text-default">Instructor</span></h3>
                      <div className="separator mt-10" data-animation-effect="fadeIn" data-effect-delay="100"></div>
                      <p className="text-center " data-animation-effect="fadeIn" data-effect-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis magnam ea necessitatibus, officiis voluptas odit! Aperiam omnis, cupiditate laudantium velit nostrum, exercitationem accusamus, possimus soluta illo deserunt tempora qui.</p>
                  </div>
              </div>
          </div>
      </div>
        <section className="main-container pb-20">
          <div className="container">
              <div className="row">
                  <div className="main col-md-12  pb-50 mb-50">
                      <h3 className="title">Who <strong>We Are</strong></h3>
                      <div className="separator-2"></div>
                      <div className="row">
                          <div className="col-md-6">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus illo vero cupiditate, sed enim voluptatibus provident consectetur. Quo dolor sunt nostrum, eligendi illo accusamus odit, ipsam excepturi voluptatem nulla minus.</p>
                              <p>Blanditiis aspernatur, non quasi, maxime corporis officiis quia. Cupiditate, voluptatibus ducimus, natus, labore mollitia dolorem incidunt voluptatum, delectus eius fugit porro placeat animi voluptatem autem hic eligendi sint. Amet pariatur odit repudiandae sunt. Rem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores a.</p>
                              <ul className="list-icons">
                                  <li><i className="icon-check-1"></i>We are here to support you</li>
                                  <li><i className="icon-check-1"></i>Free updates</li>
                                  <li><i className="icon-check-1"></i>Unlimited courses and variations</li>
                                  <li><i className="icon-check-1"></i>ipsam asperiores fugiat quo</li>
                              </ul>
                          </div>
                          <div className="col-md-6">
                            <div className="item overlay-container overlay-visible">
                                <img src="images/page-about-1.jpg" alt=""/>
                                <div className="overlay-bottom hidden-xs">
                                    <div className="text">
                                        <h3 className="title">We Can Do It</h3></div>
                                </div>
                                <a href="images/page-about-1.jpg" className="popup-img overlay-link" title="image title">
                                  <i className="icon-plus-1"></i>
                                </a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="main col-md-12">
                      <h3 className="title">Register To <strong>Become an Instructor</strong></h3>
                      <div className="separator-2"></div>
                      <div className="row">
                          <div className="col-md-6">
                            <Signup history={this.props.history} accType="trainer" btnText="Register as an Instructor"/>
                          </div>
                          <div className="col-md-6">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus illo vero cupiditate, sed enim voluptatibus provident consectetur. Quo dolor sunt nostrum, eligendi illo accusamus odit, ipsam excepturi voluptatem nulla minus.</p>
                              <p>Blanditiis aspernatur, non quasi, maxime corporis officiis quia. Cupiditate, voluptatibus ducimus, natus, labore mollitia dolorem incidunt voluptatum, delectus eius fugit porro placeat animi voluptatem autem hic eligendi sint. Amet pariatur odit repudiandae sunt. Rem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores a.</p>
                              <ul className="list-icons">
                                  <li><i className="icon-check-1"></i>We are here to support you</li>
                                  <li><i className="icon-check-1"></i>Free updates</li>
                                  <li><i className="icon-check-1"></i>Unlimited courses and variations</li>
                                  <li><i className="icon-check-1"></i>ipsam asperiores fugiat quo</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
    )
  }
}
