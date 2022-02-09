import React from 'react';


class Todo extends React.Component {

  handleClick = () => {
    this.props.toggleCompleted();
  }

  render() {
    return (
      <div><li onClick={this.handleClick}> {this.props.todo.name}</li>
      </div>
  )
  }
    
}

export default Todo;