import React, { Component } from 'react'
import { Button, } from 'react-bootstrap'
import  Container from '../Paritials/Container'

const bannerStyle = {
  backgroundImage: "url('/images/page-about-banner-1.jpg')",
  backgroundPosition: "50% 27%"
}

export default class DashboardHeader extends Component {
  render() {
    return (
      <div>
        <div className="banner dark-translucent-bg" style={bannerStyle}>
          <Container>
              <div className="row">
                  <div className="col-md-12 pv-40 mt-10">
                      <h3 className="title logo-font pull-left mt-10" data-animation-effect="fadeIn" data-effect-delay="100">
                        {this.props.title}
                      </h3>
                      {this.props.btn && <Button className="pull-right">Create a New Course</Button>}
                  </div>
              </div>
          </Container>
        </div>
      </div>
    )
  }
}
