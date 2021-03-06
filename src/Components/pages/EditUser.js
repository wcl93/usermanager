import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from 'axios';

class EditUser extends Component {
  state = {
    name:'',
    email:'',
    phone:'',
  }

  async componentDidMount(){
      const {id}=this.props.match.params;
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      const user = res.data;

      this.setState({
          name: user.name,
          email: user.email,
          phone: user.phone
      })
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const {name, email, phone} = this.state;

    const updUser = {
      name,
      email,
      phone,
    };

    const {id} = this.props.match.params;
    
    if (name === ''){
      alert('Name is required')    
      return;
    }
    if (email === ''){
      alert('Email is required')      
      return;
    }
    if (phone === ''){
      alert('Phone is required')
      return;
    }

    console.log(this.state);

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updUser)

    dispatch({type:'UPDATE_CONTACT', payload: res.data});

    //Clear state
    this.setState({
      name:'',
      email:'',
      phone:''
   })

    this.props.history.push("/");
  };
  onChange= e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {name, email, phone} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="container p-5 text-center">
              <form onSubmit={this.onSubmit.bind(this, dispatch)} className="border">
                <h1 className="text-center mt-5 mb-4">Edit User</h1>
                <div className="form-group">
                  <label htmlFor="name" className="mr-2">
                    Name{" "}
                  </label>
                  <input
                    onChange={this.onChange}
                    name='name'
                    type="text"
                    placeholder="Enter Name.."
                    value={name}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="mr-2">
                    Email{" "}
                  </label>
                  <input
                    onChange={this.onChange}
                    name='email'
                    type="text"
                    placeholder="Enter Email.."
                    value={email}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="mr-2">
                    Phone{" "}
                  </label>
                  <input
                    onChange={this.onChange}
                    name='phone'
                    type="text"
                    placeholder="Enter Phone.."
                    value={phone}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-5">
                  Submit
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditUser;
