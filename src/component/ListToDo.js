import React, { Component } from "react";

export default class ListToDo extends Component {
  render() {
    const renderData = this.props.todos.map((todoItem) => {
      return (
        <tr key={todoItem}>
          <th scope="row">{todoItem}</th>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.props.completeTodo(todoItem)}
            >
              <i className="bx bx-check"></i>
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => this.props.updateTodo(todoItem)}
            >
              <i className="bx bx-edit-alt"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.props.removeTodo(todoItem)}
            >
              <i className="bx bx-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="col-md-8 mt-4">
        <h5 className="text-center">Akan Dikerjakan</h5>
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Nama Aktivitas</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>{renderData}</tbody>
        </table>
      </div>
    );
  }
}
