import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';

export default class AboutCarousel extends Component {
  render() {
    return (
      <section className="main-container padding-bottom">
        <div className="container">
            <div className="row">
                <div className="main col-md-12">
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
                            <OwlCarousel 
                              className="content-slider-with-controls"
                              nav={true}
                              items={1}
                            >
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
                                <div className="item overlay-container overlay-visible">
                                    <img src="images/page-about-2.jpg" alt=""/>
                                    <div className="overlay-bottom hidden-xs">
                                        <div className="text">
                                            <h3 className="title">We Can Do It</h3></div>
                                    </div>
                                    <a href="images/page-about-1.jpg" className="popup-img overlay-link" title="image title">
                                      <i className="icon-plus-1"></i>
                                    </a>
                                </div>
                                <div className="item overlay-container overlay-visible">
                                    <img src="images/page-about-3.jpg" alt=""/>
                                    <div className="overlay-bottom hidden-xs">
                                        <div className="text">
                                            <h3 className="title">We Can Do It</h3></div>
                                    </div>
                                    <a href="images/page-about-1.jpg" className="popup-img overlay-link" title="image title">
                                      <i className="icon-plus-1"></i>
                                    </a>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
