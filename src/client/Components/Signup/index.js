import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { startLogin } from '../../Redux/Actions/Auth';
// import { startCreateUser } from '../actions/auth';
const bannerStyle = {
    backgroundImage: "url('images/background-img-6.jpg')",
    backgroundPosition: "50% 30%"
}
// const server = 'http://localhost:3000';

class Signup extends React.Component{
    state = {
        username: '',
        password: '',
        email: '',
        name: '',
        acc_type: '',
        licence: false,
        err: false,
        status: false
    }

    componentDidMount() {
        this.setState({ acc_type: this.props.accType })
    }

    handleSignup = (e) => {
        e.preventDefault();

        this.setState({
            status: true
        })
        // console.log(this.props)
        if(this.state.licence){
            // console.log(this.state);
            const userData = {
                name: this.state.name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                accType: this.state.acc_type,
                signup: true
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
        }else{
            this.setState({
                err: 'Please Accept our privacy policy and customer agreement'
            })
        }
    }

    render(){
        return(
            <div id={this.props.id && this.props.id} className="form-block center-block p-30 light-gray-bg border-clear">
                <form className="form-horizontal" role="form">
                    <div className="form-group has-feedback">
                        <label htmlFor="inputName" className="col-sm-3 control-label">Your Name <span className="text-danger small">*</span></label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="inputName" placeholder="Your Name" required onChange={(e) => {
                                this.setState({
                                    name: e.target.value
                                })
                            }}/> 
                            <i className="fa fa-pencil form-control-feedback"></i></div>
                    </div>
                    <div className="form-group has-feedback">
                        <label htmlFor="inputUserName" className="col-sm-3 control-label">User Name <span className="text-danger small">*</span></label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="inputUserName" placeholder="User Name" required onChange={(e) => {
                                this.setState({
                                    username: e.target.value
                                })
                            }}/> 
                            <i className="fa fa-user form-control-feedback"></i></div>
                    </div>
                    <div className="form-group has-feedback">
                        <label htmlFor="inputEmail" className="col-sm-3 control-label">Email <span className="text-danger small">*</span></label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" required onChange={(e) => {
                                this.setState({
                                    email: e.target.value
                                })
                            }}/> 
                            <i className="fa fa-envelope form-control-feedback"></i></div>
                    </div>
                    <div className="form-group has-feedback">
                        <label htmlFor="inputPassword" className="col-sm-3 control-label">Password <span className="text-danger small">*</span></label>
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
                                    <input type="checkbox" required onClick={(e) => {
                                        this.setState({
                                            licence: !this.state.licence,
                                            err: false
                                        })
                                    }}/> <span className="licence">Accept our <a href="#">privacy policy</a> and <a href="#">customer agreement</a> </span></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-3 col-sm-8">
                            <button id="autBtn" onClick={this.handleSignup} type="submit" className="btn btn-group btn-default btn-animated">{this.props.btnText ? this.props.btnText : 'Sign Up '} {this.state.status ? <i className="fa fa-spinner fa-spin"></i>:<i className="fa fa-user"></i>}</button>
                        </div>
                    </div>
                </form>
            {this.state.err && <div className="pv-20 mt-20 col-md-6 col-md-offset-3 alert-warning text-center">{this.state.err}</div>}
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    LoginUser: (body) => dispatch(startLogin(body)),
})

export default connect(null, mapDispatchToProps)(Signup);