import React, { Component } from 'react'
import Banner from '../Paritials/Banner'
import MainContent from './MainContent'
import Parallex from './Parallex'

export class Contact extends Component {
  render() {
    return (
      <div className="page-wrapper">
	      <Banner title="Contact"/>	
        <MainContent/>
        <Parallex/>
      </div>
    )
  }
}

export default Contact