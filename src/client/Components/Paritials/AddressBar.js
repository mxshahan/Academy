import React, { Component } from 'react'

export default class AddressBar extends Component {
  render() {
    const props = this.props;
    return (
      <div className="breadcrumb-container">
          <div className="container">
              <ol className="breadcrumb">
                  <li><i className="fa fa-home pr-10"></i><a className="link-dark" href="index.html">Home</a></li>
                  <li className="active">{props.title}</li>
              </ol>
          </div>
      </div>
    )
  }
}
