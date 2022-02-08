import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
       <h1>To Do App</h1>
      <div>
        <ui>
          <li>Do Homework</li>
          <li>Walk the Dog</li>
          <li>Do the Dishes</li>
          <li>Make Dinner</li>
        </ui>

        <form>
          <input />
          <button>Add ToDo</button>
        </form>
        <button>Remove ToDo</button>
      </div>
      </div>
    )
  }
}
