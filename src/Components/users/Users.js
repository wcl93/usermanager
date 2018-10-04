import React, { Component } from 'react'
import User from './User';
import {Consumer} from '../../context'

class Users extends Component {
    state = {

    }
  render() {
      return (
        <Consumer>
            {value => {
                const {users} = value;
                return (
                    <React.Fragment>
                      {users.map(user=>  (
                          <User
                              key={user.id}
                              user={user}
                          />
                      ))}
                    </React.Fragment>
                  )
            }}
        </Consumer>
      )
  }
}

export default Users;
