import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state,action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
        return{
            ...state,
            users:state.users.filter(user=>
                user.id !== action.payload)
        }
        case 'ADD_CONTACT':
        return {
            ...state,
            users: [action.payload,
            ...state.users]
        }
        case 'UPDATE_CONTACT':
        return {
            ...state,
            users:state.users.map(user =>
                user.id ===action.payload.id ? (user = action.payload):user)
        }
        default:
        return state;
    }
}

export class Provider extends Component {
    state = {
        users: [
            //empty state
        ],
        dispatch: action => {
            this.setState(state=>reducer(state,action))
        }
    }

    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({users:res.data})
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;