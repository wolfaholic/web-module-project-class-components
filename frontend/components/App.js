import axios from 'axios'
import React from 'react'

import TodoList from './TodoList'
import Form from './Form'
 
const initialState = {
    todos: [],
}

const URL = 'http://localhost:9000/api/todos';

class App extends React.Component {

state = initialState

componentDidMount() {  
  axios.get(URL)
    .then(res => {
      console.log(res)  
      this.setState({ ...this.state, todos: res.data.data })
    })
    .catch(this.onError)
}

addTodo = (taskName) => {
  // const newTodo = {
  //     task: taskName,
  //     id: Date().now,
  //     completed: false
  //   };
  axios.post(URL, {name: taskName})
      .then(res => {
        console.log(res)
        this.setState({
          todos: [...this.state.todos, res.data.data]
        });
      })
      .catch(err => console.log(err))
 
  };


toggleCompleted = todoId => {
  this.setState({
    todo: this.state.todos.map(task => {
      if (task.id === todoId) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    })
  })
}

clearCompleted = () => {
  this.setState({
    todo: this.state.todos.filter(task => !task.completed)
  })
}

render() {
console.log(this.state);

  return (
    <div className='App'>
      <div className='header'>
          <h2>Daily ToDos List</h2>
          <TodoList  todos={this.state.todos} clearCompleted={this.clearCompleted}  toggleCompleted={this.toggleCompleted}/>
       </div>
      <Form addTodo={this.addTodo}  /> 
      </div>
  );
}
}

export default App;