import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Courses = () => (
    <section className="section pv-40 light-gray-bg clearfix ">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h3 className="title text-center">Courses at <span className="text-default">Training Academy</span></h3>
                    <div className="separator"></div>
                    <p className="lead text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dignissimos, adipisci ipsa aut.</p>
                </div>
            </div>
        </div>
        <div className="container-fluid" >
            <div className="row">
            <OwlCarousel
                items={6}
                nav={true}
                loop={true}
                id="homepage-course"
            >
                <div className="item">
                    <div className="image-box shadow text-center mb-20">
                        <div className="overlay-container overlay-visible"><img src="images/education-4.jpg" alt=""/> <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                            <div className="overlay-bottom">
                                <div className="text">
                                    <p className="lead margin-clear mobile-visible">Computer Science</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="image-box shadow text-center mb-20">
                        <div className="overlay-container overlay-visible"><img src="images/education-5.jpg" alt=""/> <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                            <div className="overlay-bottom">
                                <div className="text">
                                    <p className="lead margin-clear mobile-visible">Retails</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="image-box shadow text-center mb-20">
                        <div className="overlay-container overlay-visible"><img src="images/education-5.jpg" alt=""/> <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                            <div className="overlay-bottom">
                                <div className="text">
                                    <p className="lead margin-clear mobile-visible">Retails</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="image-box shadow text-center mb-20">
                        <div className="overlay-container overlay-visible"><img src="images/education-6.jpg" alt=""/> <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                            <div className="overlay-bottom">
                                <div className="text">
                                    <p className="lead margin-clear mobile-visible">Finance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="image-box shadow text-center mb-20">
                        <div className="overlay-container overlay-visible"><img src="images/education-7.jpg" alt=""/> <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                            <div className="overlay-bottom">
                                <div className="text">
                                    <p className="lead margin-clear mobile-visible">Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="image-box shadow text-center mb-20">
                        <div className="overlay-container overlay-visible"><img src="images/education-8.jpg" alt=""/> <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                            <div className="overlay-bottom">
                                <div className="text">
                                    <p className="lead margin-clear mobile-visible">Sales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="item">
                    <div className="image-box shadow text-center mb-20">
                        <div className="overlay-container overlay-visible"><img src="images/education-9.jpg" alt=""/> <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
                            <div className="overlay-bottom">
                                <div className="text">
                                    <p className="lead margin-clear mobile-visible">Science</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            </div>
        </div>        
    </section>     
)

export default Courses;