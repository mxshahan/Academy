import React, { Component } from 'react'
import DashboardHeader from '../Paritials/DashboardHeader'
import Container from '../Paritials/Container';
import Row from '../Paritials/Row';
import { Button } from 'react-bootstrap'

export default class AddCourse extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="bg-white addcourse">
        <DashboardHeader title="Add New Course" btn={false}/>
        <Container>
        <div className="col-md-6 col-md-offset-3 mt-20 TrainerTest">
          <form className="form-horizontal">
            <div className="form-group has-feedback">
              <div className="">
                  <input type="text" className="form-control" id="inputUserName" placeholder="Title of the course e.g Final Test For XYZ" required onChange={(e) => {
                      this.setState({
                          email: e.target.value
                      })
                  }}/> 
              </div>
            </div>
            <div className="form-group has-feedback">
              <div className="">
                  <select type="text" className="form-control" id="inputUserName" placeholder="Email" required onChange={(e) => {
                      this.setState({
                          email: e.target.value
                      })
                  }}>
                    <option value="">Select Category</option>
                    <option value="something">Category One</option>
                    <option value="something">Category Two</option>
                  </select> 
              </div>
            </div>

            <div className="form-group has-feedback">            
                <div className="">
                    <textarea rows="5" type="text" className="form-control" id="inputUserName" placeholder="Add Question" required onChange={(e) => {
                        this.setState({
                            email: e.target.value
                        })
                    }}></textarea> 
                </div>
            </div>

            <div className="form-group has-feedback">            
                <Button 
                  className="col-md-12" 
                  onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                      addLecture: true
                    })
                  }}>
                  <i className="fa fa-plus"></i> Add Lecture</Button>
            </div>

            <div className="form-group has-feedback">            
                <div className="">
                <fieldset>
                  <legend>New Lecture</legend>
                  <input type="text" className="form-control" id="inputUserName" placeholder="Title of the course e.g Final Test For XYZ" required onChange={(e) => {
                      this.setState({
                          email: e.target.value
                      })
                  }}/> 
                  <Button className="pull-right">Add Lecture</Button>
                </fieldset>
                </div>
            </div>

            <div className="form-group has-feedback">            
                <div className="">
                <fieldset>
                  <legend>Lecture 1</legend>
                  <Row>
                    <div className="col-md-12">
                      <Button className="pull-right">Add Lecture</Button>
                    </div>
                  </Row>
                  <br/>
                  <Row>
                    <div class="col-md-4 text-center">
                      <Button block><i className="fa fa-video-camera  fa-2x"></i></Button>
                      <label>Video</label>
                    </div>
                    <div class="col-md-4 text-center">
                      <Button block><i className="fa fa-slideshare  fa-2x"></i></Button>
                      <label>Slide</label>
                    </div>
                    <div class="col-md-4 text-center">
                      <Button block><i className="fa fa-newspaper-o fa-2x"></i></Button>
                      <label>Article</label>
                    </div>
                  </Row>
                </fieldset>
                </div>
            </div>

            <div className="form-group has-feedback text-center">            
              <Button bsSize="large" block>Publish</Button>
            </div>

          </form>
        </div>
        </Container>
      </div>
    )
  }
}
