import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">

<Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            {/* <Route path="/todos" component={ListTodosComponent}/> */}
                            {/* <Route component={ErrorComponent}/> */}
                        </Switch>
                    </>
                </Router>
        {/* <LoginComponent />
        this is running */}
      </div>
    );
  }
}

class WelcomeComponent extends Component {
    render() {
        return <div>
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
                </div>
    }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "irisTech",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  //   handleUsernameChange(event) {
  //     this.setState({
  //       username: event.target.value,
  //     });
  //   }

  handleChange(event) {
    //console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    //in28minutes,dummy
    if (
      this.state.username === "in28minutes" &&
      this.state.password === "dummy"
    ) {
      this.props.history.push(`/welcome/${this.state.username}`)
     // this.setState({ showSuccessMessage: true });
      //this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Sucessful</div>}
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
