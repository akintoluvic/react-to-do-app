import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class AddTodo extends Component {
  

    render() {
        const { onChange, onSubmit, title } = this.props;
        return (
            <form onSubmit={onSubmit} style={{display: 'flex'}} >
                <input 
                type="text" 
                name="title" 
                style={{flex: '10'}} 
                placeholder="Add To Do ..." 
                value={title} 
                onChange={onChange}
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
//     title: PropTypes.string.isRequired
// }
 
export default AddTodo;