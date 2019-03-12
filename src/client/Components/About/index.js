import React, { Component } from 'react'
import AboutCarousel from './AboutCarousel';

const bannerStyle = {
  backgroundImage: "url('images/page-about-banner-1.jpg')",
  backgroundPosition: "50% 27%"
}

export class About extends Component {
  render() {
    return (
      <div>
        <div className="banner dark-translucent-bg" style={bannerStyle}>
            <div className="breadcrumb-container">
                <div className="container">
                    <ol className="breadcrumb">
                        <li><i className="fa fa-home pr-10"></i><a className="link-dark" href="index.html">Home</a></li>
                        <li className="active">About</li>
                    </ol>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-center col-md-offset-2 pv-20">
                        <h3 className="title logo-font " data-animation-effect="fadeIn" data-effect-delay="100">The <span className="text-default">Training</span> Academy.</h3>
                        <div className="separator mt-10" data-animation-effect="fadeIn" data-effect-delay="100"></div>
                        <p className="text-center " data-animation-effect="fadeIn" data-effect-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis magnam ea necessitatibus, officiis voluptas odit! Aperiam omnis, cupiditate laudantium velit nostrum, exercitationem accusamus, possimus soluta illo deserunt tempora qui.</p>
                    </div>
                </div>
            </div>
        </div>
        <AboutCarousel/>
      </div>
    )
  }
}

export default About
