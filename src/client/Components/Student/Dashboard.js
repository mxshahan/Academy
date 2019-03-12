import React, { Component } from 'react'
import DashboardHeader from '../Paritials/DashboardHeader'
import DashboardTable from '../Paritials/DashboardTable'

const bannerStyle = {
  backgroundImage: "url('/images/page-about-banner-1.jpg')",
  backgroundPosition: "50% 27%"
}

export default class StudentDashboard extends Component {
  render() {
    return (
      <div>
        <DashboardHeader title="Student Dashboard" btn={false}/>
        <DashboardTable className="mt-20"/>
      </div>
    )
  }
}
