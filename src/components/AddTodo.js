import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <form style={{display: 'flex'}} >
                <input 
                type="text" 
                name="title" 
                style={{flex: '10'}} 
                placeholder="Add To Do ..." 
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
 
export default AddTodo;