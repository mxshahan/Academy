import React, { Component } from 'react'
import { Slider } from './Slider';
import Courses from './Courses';
import TrainingHistory from './TrainingHistory';
import Instructors from './Instructors';

class Home extends Component {
  render() {
    return (
<div className="page-wrapper">    
    <div id="page-start"></div>
      <Slider/>
      <Courses/>
      <TrainingHistory/>
      <Instructors/>

</div>    
    )
  }
}

export default Home
