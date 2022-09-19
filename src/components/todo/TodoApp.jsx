import React, { Component } from "react";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <LoginComponent />
        this is running
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "irisTech",
      password: "",
      hasLoginFailed: false,
     showSuccessMessage: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  //   handleUsernameChange(event) {
  //     this.setState({
  //       username: event.target.value,
  //     });
  //   }

  handleChange(event) {
    //console.log(this.state);
    this.setState(
        {
            [event.target.name]
              :event.target.value
        }
    )
}

  loginClicked() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        Username:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

export default TodoApp;
