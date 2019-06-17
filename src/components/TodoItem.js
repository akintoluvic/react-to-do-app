import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            marginBottom: '1px',
            textDecoration: 
            this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    render() { 
        const { title, id } = this.props.todo;
        return ( 
        <div style={this.getStyle()} >
          <h3>
              <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button 
          onClick={this.props.deleteTodo.bind(this, id)} 
          style={btnStyle}>x</button>
          </h3>  
        </div> 
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px 7px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
 
export default TodoItem;