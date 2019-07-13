import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class AddTodo extends Component {
    // // state = { 
    // //     title: ''
    // //  }

    // //  onChange = (e) => this.setState({ [e.target.name]: e.target.value })
     
    // //  onSubmit = (e) => {
    // //     e.preventDefault();
    // //     this.props.addTodo(this.state.title);
    // //     this.setState({ title: '' })
    //  }

    render() {
        return (
            <form onSubmit={this.props.onSubmit} style={{display: 'flex'}} >
                <input 
                type="text" 
                name="title" 
                style={{flex: '10'}} 
                placeholder="Add To Do ..." 
                value={this.props.title} 
                onChange={this.props.onChange}
                />
                <input 
                type="submit" 
                value="submit" 
                className="btn" 
                style={{flex: '1'}}
                />
            </form>
        ) 
        
    }
}

// // PropTypes
// AddTodo.propTypes = {
//     todo: PropTypes.object.isRequired
// }
 
export default AddTodo;