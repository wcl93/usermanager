import React, {Component} from 'react'

class NotFound extends Component {
    render(){
        return(
            <div className='container text-center mt-5'>
                <h1><span className='text-danger'>404</span> Page Not Found</h1>
                <h5 className='mt-4 text-secondary'>Sorry, This page does not exist.</h5>
            </div>
        )
    }
}

export default NotFound;