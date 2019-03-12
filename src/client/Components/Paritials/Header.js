import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from './Container';
import AuthNav from './AuthNav';
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux';
import UserJoin from './UserJoin';
import Login from '../Login'

class Header extends Component {
	state = {
		show: false
	}

	handleHide = () => {
		this.setState({ show: false });
	}
	render() {
		const { isAuthenticated } = this.props
		return (
			<div>
				<div className="scrollToTop circle"><i className="icon-up-open-big"></i></div>
				<div className="page-wrapper">
					<div className="header-container">
						<div className="header-top dark ">
							<div className="container">
								<div className="row">
									<div className="col-xs-3 col-sm-6 col-md-8 header-contact">
										<div className="header-top-first clearfix">
											{/* <ul className="social-links circle small clearfix hidden-xs">
												<li className="twitter"><Link target="_blank" to="http://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
												<li className="skype"><Link target="_blank" to="http://www.skype.com/"><i className="fa fa-skype"></i></Link></li>
												<li className="linkedin"><Link target="_blank" to="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></Link></li>
												<li className="googleplus"><Link target="_blank" to="http://plus.google.com/"><i className="fa fa-google-plus"></i></Link></li>
												<li className="youtube"><Link target="_blank" to="http://www.youtube.com/"><i className="fa fa-youtube-play"></i></Link></li>
												<li className="facebook"><Link target="_blank" to="http://www.facebook.com/"><i className="fa fa-facebook"></i></Link></li>
											</ul> 
											<div className="social-links hidden-lg hidden-md hidden-sm circle small">
												<div className="btn-group dropdown">
													<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt"></i></button>
													<ul className="dropdown-menu dropdown-animation">
														<li className="twitter"><Link target="_blank" to="http://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
														<li className="skype"><Link target="_blank" to="http://www.skype.com/"><i className="fa fa-skype"></i></Link></li>
														<li className="linkedin"><Link target="_blank" to="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></Link></li>
														<li className="googleplus"><Link target="_blank" to="http://plus.google.com/"><i className="fa fa-google-plus"></i></Link></li>
														<li className="youtube"><Link target="_blank" to="http://www.youtube.com/"><i className="fa fa-youtube-play"></i></Link></li>
														<li className="facebook"><Link target="_blank" to="http://www.facebook.com/"><i className="fa fa-facebook"></i></Link></li>
													</ul>
												</div>
											</div> */}
											<ul className="list-inline hidden-sm hidden-xs">
												{/* <li><i className="fa fa-map-marker pr-5 pl-10"></i>7 Boroughbridge Road, Birley, UK</li> */}
												<li><i className="fa fa-phone pr-5 pl-10"></i>+44 079 8708-6739</li>
												{/* <li><i className="fa fa-envelope-o pr-5 pl-10"></i>mail@domain.com</li> */}
											</ul>
										</div>
									</div>
									<UserJoin history={this.props.history}/>
								</div>
							</div>
						</div>
						<header className="header  fixed   clearfix">
							<div className="container">
								<div className="row">
									<div className="col-md-3">
										<div className="header-left clearfix">
											<div id="logo" className="logo">
												<Link to="/"><h2 className="logo-font title pr-10">Training Academy</h2></Link>
											</div>
										
										</div>
									</div>
									<div className="col-md-9">
										<div className="header-right clearfix pull-right">
											<div className="main-navigation  animated with-dropdown-buttons">
												<nav className="navbar navbar-default" role="navigation">
													<div className="container-fluid">
														<div className="navbar-header">
															<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
																<span className="sr-only">Toggle navigation</span>
																<span className="icon-bar"></span>
																<span className="icon-bar"></span>
																<span className="icon-bar"></span>
															</button>
														</div>
														<div className="collapse navbar-collapse" id="navbar-collapse-1">
															<ul className="nav navbar-nav ">
																<li><NavLink activeClassName="active" to="/">Home</NavLink></li>
																<li><NavLink activeClassName="active" to="/about">About</NavLink></li>
																<li><NavLink activeClassName="active" to="/courses">Courses</NavLink></li>
																<li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
																{!isAuthenticated && <li><Button className="loginBtn" onClick={() => {
																		this.setState({
																			show: true
																		})
																	}}>Login</Button></li>
																}
															</ul>
														</div>
													</div>
												</nav>
											</div>
										</div>
									</div>
								</div>
							</div>
						</header>
					</div>
				</div>

						{!isAuthenticated && 
            <Modal
                show={this.state.show}
                onHide={this.handleHide}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                    SIGN UP
                    </Modal.Title>
                </Modal.Header>
                <Login id="auth"/>
            </Modal>
        		}
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.token
})
export default connect(mapStateToProps)(Header)

