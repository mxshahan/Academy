import React, { Component } from 'react'
import DashboardHeader from '../Paritials/DashboardHeader'
import Container from '../Paritials/Container';
import { Button } from 'react-bootstrap'

export default class TrainerTest extends Component {
  render() {
    return (
      <div className="bg-white">
        <DashboardHeader title="New Test" btn={false}/>
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
                    <input type="text" className="form-control" id="inputUserName" placeholder="Add Question" required onChange={(e) => {
                        this.setState({
                            email: e.target.value
                        })
                    }}/> 
                </div>
            </div>
            <div className="form-group has-feedback">            
                <Button onClick={(e) => e.preventDefault() }>Add Answer +</Button>
            </div>
            <div className="form-group has-feedback text-center">            
              <input type="submit" className="btn btn-info btn-lg col-md-12" defaultValue="Publish"/>
            </div>

          </form>
        </div>
        </Container>
      </div>
    )
  }
}
