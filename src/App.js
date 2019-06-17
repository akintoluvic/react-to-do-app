import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Green',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting Jamon',
        completed: false
      }
    ]
  }

  // Toggle Todo Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
      return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete} 
          deleteTodo={this.deleteTodo} 
          />
        </div>
        
      </div>
    );
  }
}

export default App;
