import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Authorized extends Component {
  componentDidMount() {
    localStorage.getItem('accType') === 'student' && this.props.history.push('/student/dashboard');
    localStorage.getItem('accType') === 'trainer' && this.props.history.push('/trainer/dashboard');
    localStorage.getItem('accType') === 'admin' && this.props.history.push('/admin/dashboard');
  }

  render() {
    return (
      <div className="text-center">
        Please wait...
      </div>
    )
  }
}


export default (Authorized);