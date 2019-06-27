import React, { Component } from 'react';
import  { BrowserRouter as Router, Route  } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/layout/About';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with Bridge',
        completed: false
      },
      {
        id: uuid.v4(),
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

  // Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  // Delete Todo
  editTodo = (id) => {
    console.log('Now edit')
    
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
      return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render = {props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  editTodo={this.editTodo}
                  deleteTodo={this.deleteTodo} 
                  />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
              
            </div>
          </div>
        </Router>
      
    );
  }
}

export default App;
