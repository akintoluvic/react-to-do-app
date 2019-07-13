import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddTodo extends Component {
  

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

// PropTypes
AddTodo.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default AddTodo;