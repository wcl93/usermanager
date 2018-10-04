import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='container text-center'>
        <h1 className='mt-5 mb-1'>About</h1>
        <hr/>
        <p>User Manager is a ReactJS-based web app for creating, reading, updating and deleting(CRUD) user data.</p>
        <p>It uses JSON placeholder data to send and receive HTTP requests to a server like an actual database.</p>
        <p>NOTE: New users cannot be edited as JSON placeholder only mimics a HTTP request</p>
        <p>For more info about the creator, please visit: <a href='https://www.wayneluong.co.uk'>www.wayneluong.co.uk</a></p>
      </div>
    )
  }
}
