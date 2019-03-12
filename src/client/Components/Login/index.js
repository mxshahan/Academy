import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { startCreateUser } from '../actions/auth';
import axios from 'axios';
import { startLogin } from '../../Redux/Actions/Auth';
const bannerStyle = {
    backgroundImage: "url('images/background-img-6.jpg')",
    backgroundPosition: "50% 30%"
}
const server = 'http://localhost:3000';

class Login extends React.Component{
    state = {
        username: '',
        password: '',
        status: false
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({
            status: true
        })
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post(`/api/auth/local`, userData).then((res) => {
            localStorage.setItem('auth', res.data.token);
            localStorage.setItem('accType', res.data.acc_type);
            this.props.LoginUser(res.data);
            this.props.history.push('/authorized')
        }).catch(e => {
            this.setState({
                err: e.response.data.message,
                status: false                
            })
        })
    }

    render(){
        return (
            <div id={this.props.id && this.props.id} className="form-block center-block p-30 light-gray-bg border-clear">
                <form className="form-horizontal">
                    <div className="form-group has-feedback">
                        <label htmlFor="inputUserName" className="col-sm-3 control-label">Email</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="inputUserName" placeholder="Username or Email" required onChange={(e) => {
                                this.setState({
                                    username: e.target.value
                                })
                            }}/> 
                            <i className="fa fa-user form-control-feedback"></i></div>
                    </div>
                    <div className="form-group has-feedback">
                        <label htmlFor="inputPassword" className="col-sm-3 control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" required onChange={(e) => {
                                this.setState({
                                    password: e.target.value
                                })
                            }}/> 
                            <i className="fa fa-lock form-control-feedback"></i></div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-8">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" required/> Remember me. </label>
                            </div>
                        <button onClick={this.handleLogin} type="submit" className="btn btn-group btn-default btn-animated">Log In {this.state.status ? <i className="fa fa-spinner fa-spin"></i>:<i className="fa fa-user"></i>}</button>
                            <ul className="space-top">
                                <li><a href="#">Forgot your password?</a></li>
                            </ul>
                        </div>
                    </div>
                </form>
            <p className="text-center space-top">Don't have an account yet? <Link to="signup">Sign up</Link> now.</p>                                    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    LoginUser: (body) => dispatch(startLogin(body)),
	// token: localStorage.getItem('accessToken')    
})


export default connect(null, mapDispatchToProps)(Login);