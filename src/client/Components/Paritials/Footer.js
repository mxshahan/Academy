import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer id="footer" className="clearfix ">
            <div className="subfooter default-bg">
                <div className="container">
                    <div className="subfooter-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-center"><span className="logo-font pr-10">Training Academy</span> Copyright © 2018 The Project. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
}

export default Footer
