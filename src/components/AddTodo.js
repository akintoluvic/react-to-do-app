import React, { Component } from 'react';

class AddTodo extends Component {
    state = { 
        title: ''
     }

     onChange = (e) => this.setState({ [e.target.name]: e.target.value })
     
     onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ state: '' })
     }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}} >
                <input 
                type="text" 
                name="title" 
                style={{flex: '10'}} 
                placeholder="Add To Do ..." 
                value={this.state.title} 
                onChange={this.onChange}
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