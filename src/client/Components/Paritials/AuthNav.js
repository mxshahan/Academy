import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from './Container';
import Row from './Row';


class AuthNav extends React.Component{
  render(){
    const {isAuthenticated, LogoutUser, ...props} = this.props;
    return(
      <Container>
        <Row>
          <div className="col-md-12  my-3">
            <div className="float-left">
              <Link to="tel:+998888888888" className="text-white">Call Us: +99 888-888-8888</Link>
            </div>
            <div className="float-right text-white">
              <Link to="/login" className="py-1 mr-3 text-white">Login</Link>
              <Link to="/register" className="py-1 text-white">register</Link>
            </div>
          </div>
        </Row>
      </Container>
    )
  }
}
export default (AuthNav)