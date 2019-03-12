import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoutUser } from '../../Redux/Actions/Auth';
import Signup from '../Signup'

class UserJoin extends React.Component{
    state = {
        show: false
    }

    handleHide = () => {
        this.setState({ show: false });
    }
    
    render() {
        const { isAuthenticated, ...props } = this.props;
        return (
        <div className="col-xs-9 col-sm-6 col-md-4">
            <div id="header-top-second" className="clearfix text-right ">
            {isAuthenticated ?							
                <li className="nav-item dropdown"> 
                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                        <img width="40px" className="img-responsive img-circle pr-10" src="/images/avatar.png" alt="User Image"/>
                        <span className="hidden-xs">User Name <i className="fa fa-angle-down"></i></span>
                    </Link>  
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li className="user-header text-white text-center bg-dark">
                            <img width="80px" className="img-responsive img-circle" src="/images/avatar.png" alt="User Image"/>
                            <p>
                            User Name
                            <small>Member since 2018</small>
                            </p>
                        </li>

                        <li>
                            <Link to="/authorized" className="btn btn-default btn-block">Dashboard</Link>                            
                        </li>
                        <div>
                            <li>
                                <Link to="/trainer/addcourse" className="btn btn-default btn-block">Add Course</Link>                            
                            </li>
                            <li>
                                <Link to="/trainer/addtest" className="btn btn-default btn-block">Add Test</Link>                            
                            </li>
                        </div>

                        <li>
                            <Link to="#" className="btn btn-danger pull-right text-white" onClick={() => {
                                localStorage.clear();
                                props.LogoutUser();
                            }}> Logout
                            </Link>
                        </li>

                    </ul>
                </li> 
                :
                <nav>
                <ul className="list-inline joining">
                    <li><Button
                        bsClass="btn"
                        onClick={() => this.setState({ show: true })}
                    >Start Learning</Button></li>
                    <li><Button onClick={() => {
                        this.props.history.push('/become-instructor')
                    }}>Become an Instructor</Button></li>
                </ul>
                </nav>
            }
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
                <Signup id="auth" accType="student"/>
            </Modal>
        }
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token
})

const mapDispatchToProps = (dispatch) => ({
  LogoutUser: () => dispatch(LogoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserJoin)