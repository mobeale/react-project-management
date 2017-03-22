import React, { Component } from 'react';

class TodoItem extends Component {

deleteProject(id){
  this.props.onDelete(id)
}

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.id}</strong> - <span>{this.props.todo.title}</span>
      </li>
    );
  }
}

TodoItem.PropTypes = {
  todo: React.PropTypes.object,
}

export default TodoItem;
