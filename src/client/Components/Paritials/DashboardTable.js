import React, { Component } from 'react'
import Container from './Container';

export default class DashboardTable extends Component {
  render() {
    return (
      <Container>
      <table className={`table table-hover ${this.props.className && this.props.className}`}>
        <thead>
          <tr>
            <th scope="col" colSpan="4">Course Title</th>
            <th scope="col">Creation Data</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">Larry the Bird Larry the Bird Larry the Bird</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td colSpan="4">Larry the Bird Larry the BirdLarry the Bird</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td colSpan="4">Larry the Bird Larry the Bird Larry the Bird Larry the Bird</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
      </Container>
    )
  }
}
