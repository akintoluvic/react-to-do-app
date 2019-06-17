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
          </h3>  
        </div> 
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
 
export default TodoItem;