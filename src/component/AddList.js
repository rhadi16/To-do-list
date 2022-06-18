import React, { Component } from "react";
import ListToDo from "./ListToDo";
import ToDoComplete from "./ToDoComplete";

export default class AddList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItem: "",
      todos: [],
      comptodos: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      todoItem: e.target.value,
    });
  };

  removeTodo = (e) => {
    let array = [...this.state.todos];
    let index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ todos: array });
    }
  };

  updateTodo = (e) => {
    let array = [...this.state.todos];
    let index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        todos: array,
        todoItem: e,
      });
    }
  };

  completeTodo = (e) => {
    let array = [...this.state.todos];
    let index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        todos: array,
        comptodos: [...this.state.comptodos, e],
      });
    }
  };

  removecompTodo = (e) => {
    let array = [...this.state.comptodos];
    let index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ comptodos: array });
    }
  };

  uncompTodo = (e) => {
    let array = [...this.state.comptodos];
    let index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({
        comptodos: array,
        todos: [...this.state.todos, e],
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-md-center">
              <div className="col-md-5">
                <div className="mb-3 text-center">
                  <label className="form-label">Tambahkan List</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    value={this.state.todoItem}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="row justify-content-md-center">
          <ListToDo
            removeTodo={this.removeTodo}
            updateTodo={this.updateTodo}
            completeTodo={this.completeTodo}
            {...this.state}
          />
        </div>
        <div className="row justify-content-md-center">
          <ToDoComplete
            uncompTodo={this.uncompTodo}
            removecompTodo={this.removecompTodo}
            {...this.state}
          />
        </div>
      </>
    );
  }
}
