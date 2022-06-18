import React, { Component } from "react";

export default class ToDoComplete extends Component {
  render() {
    const renderData = this.props.comptodos.map((comtodoItem) => {
      return (
        <tr key={comtodoItem}>
          <th scope="row">{comtodoItem}</th>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.props.uncompTodo(comtodoItem)}
            >
              <i className="bx bx-undo"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.props.removecompTodo(comtodoItem)}
            >
              <i className="bx bx-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="col-md-8 mt-4">
        <h5 className="text-center">Pekerjaan Selesai</h5>
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
