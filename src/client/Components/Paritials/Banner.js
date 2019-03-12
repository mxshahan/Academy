import React, { Component } from 'react'
import AddressBar from './AddressBar'

const bannerStyle = {
  backgroundImage: "url('/images/background-img-3.jpg')",
  backgroundPosition: "50% 30%"
}

export class Banner extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <div className="banner dark-translucent-bg" style={bannerStyle}>
        <AddressBar title={props.title}/>

        <div className="container">
            <div className="row">
                <div className="col-md-8 text-center col-md-offset-2 pv-20">
                    <h1 className="page-title text-center">{props.title}</h1>
                    <div className="separator"></div>
                    <p className="lead text-center">It would be great to hear from you! Just drop us a line and ask for anything with which you think we could be helpful. We are looking forward to hearing from you!</p>
                    <ul className="list-inline mb-20 text-center">
                        <li><i className="text-default fa fa-map-marker pr-5"></i>7 Boroughbridge Road, Birley, UK</li>
                        <li><a href="tel:+00 1234567890" className="link-dark"><i className="text-default fa fa-phone pl-10 pr-5"></i>+44 079 8708-6739</a></li>
                        <li><a href="mailto:info@theproject.com" className="link-dark"><i className="text-default fa fa-envelope-o pl-10 pr-5"></i>info@domain.com</a></li>
                    </ul>
                    <div className="separator"></div>
                    <ul className="social-links circle animated-effect-1 margin-clear text-center space-bottom">
                        <li className="twitter"><a target="_blank" href="http://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
                        <li className="skype"><a target="_blank" href="http://www.skype.com/"><i className="fa fa-skype"></i></a></li>
                        <li className="linkedin"><a target="_blank" href="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                        <li className="googleplus"><a target="_blank" href="http://plus.google.com/"><i className="fa fa-google-plus"></i></a></li>
                        <li className="youtube"><a target="_blank" href="http://www.youtube.com/"><i className="fa fa-youtube-play"></i></a></li>
                        <li className="facebook"><a target="_blank" href="http://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Banner
