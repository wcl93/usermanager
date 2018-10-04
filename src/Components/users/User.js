import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from 'axios'
import {Link} from 'react-router-dom'

class User extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) =>{
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({ type: "DELETE_CONTACT", payload: id });
    }catch (e){
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  }

  render() {
    const { id, name, email, phone } = this.props.user;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { showContactInfo } = this.state;
          return (
            <div className="card m-4 p-2">
              <div className="container">
                <i
                  className="fas fa-times text-danger ml-2"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{
                    display: "inline",
                    cursor: "pointer",
                    float: "right"
                  }}
                />
                <Link
                to= {`user/edit/${id}`}
                  className="fas fa-pencil-alt text-dark ml-2"
                  style={{
                    display: "inline",
                    cursor: "pointer",
                    float: "right"
                  }}
                ></Link>
                <div className="card-title font-weight-bold">
                  {name} 
                  <i
                    className="fas fa-sort-down ml-1"
                    style={{ cursor: "pointer" }}
                    onClick={this.onShowClick}
                  />
                </div>
              </div>

              {showContactInfo ? (
                <ul>
                  <div className="card-text">Email: {email}</div>
                  <div className="card-text">Phone: {phone}</div>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default User;
