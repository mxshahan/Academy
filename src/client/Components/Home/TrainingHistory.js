import React from 'react';

const TrainingHistory = () => (
    <div className="pv-40 footer-top">
        <div className="container">
            <div className="separator-2"></div>
            <div className="row mb-20">
                <div className="col-lg-6"><img src="images/education-about.jpg" alt=""/></div>
                <div className="col-lg-6">
                    <h3 className="logo-font">Training <span className="text-default">Academy </span> Since <span className="text-default">1990</span></h3>
                    <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente unde id porro saepe enim ipsam, architecto dicta iste adipisci eligendi aliquid cupiditate molestias corrupti, suscipit corporis exercitationem quis alias dolor.</em></p>
                    <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo culpa cupiditate iure deserunt eveniet reprehenderit placeat, magnam voluptas magni maiores numquam cum veritatis enim quam deleniti repudiandae perferendis! Dolores, illo.</em></p>
                    <h3>Connect with <span className="text-default">us</span></h3>
                    <ul className="social-links default circle animated-effect-1">
                        <li className="facebook"><a target="_blank" href="http://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                        <li className="twitter"><a target="_blank" href="http://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
                        <li className="googleplus"><a target="_blank" href="http://plus.google.com/"><i className="fa fa-google-plus"></i></a></li>
                        <li className="skype"><a target="_blank" href="http://www.skype.com/"><i className="fa fa-skype"></i></a></li>
                        <li className="instagram"><a target="_blank" href="http://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                        <li className="linkedin"><a target="_blank" href="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                        <li className="pinterest"><a target="_blank" href="http://www.pinterest.com/"><i className="fa fa-pinterest"></i></a></li>
                        <li className="flickr"><a target="_blank" href="http://www.flickr.com/"><i className="fa fa-flickr"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="call-to-action pv-40 text-center">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <h2 className="title">Get the latest courses news.</h2>
                                <div className="separator mb-20"></div>
                                <form className="form-inline margin-clear">
                                        <div className="form-group has-feedback" style={{marginRight: "5px"}}>
                                            <label className="sr-only" htmlFor="subscribe3">Email address</label>
                                            <input type="email" className="form-control form-control-lg" id="subscribe3" placeholder="Enter email" name="subscribe3" required=""/> <i className="fa fa-envelope form-control-feedback"></i>
                                        </div>
                                        <button type="submit" className="btn btn-lg btn-default btn-animated margin-clear">Subscribe <i className="fa fa-send"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TrainingHistory;