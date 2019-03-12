import React, { Component } from 'react'

export default class Parallex extends Component {
  render() {
    return (
        <section className="section pv-40 parallax background-img-1 dark-translucent-bg" style={{backgroundPosition:"50% 60%"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="call-to-action text-center">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2">
                                    <h2 className="title">Subscribe to Our Newsletter</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus error pariatur deserunt laudantium nam, mollitia quas nihil inventore, quibusdam?</p>
                                    <div className="separator"></div>
                                    <form className="form-inline margin-right-2">
                                        <div className="form-group has-feedback" style={{marginRight: "10px"}}>
                                            <label className="sr-only" htmlFor="subscribe2">Email address</label>
                                            <input type="email" className="form-control" id="subscribe2" placeholder="Enter email" name="subscribe2" required=""/> <i className="fa fa-envelope form-control-feedback"></i>
                                        </div>
                                        <button type="submit" className="btn btn-gray-transparent btn-animated margin-clear">Submit <i className="fa fa-send"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
