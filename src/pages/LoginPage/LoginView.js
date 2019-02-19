import React, { Component } from 'react';
import HalfHalfLayout from 'shared/layouts/HalfHalfLayout';
import LoginForm from './components/LoginForm';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  
  // Redirects to dashboard if user is successfully authenticated
  componentDidUpdate() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      this.props.history.push("/");
    }
  }

  // Log email and password as user is typing
  onLoginFormChange = ((e) => {
    const value = e.target.value;
    const field = e.target.type;
    this.setState({ [field]: value });
  });

  // Assume all users who are logging in are first time users
  onLoginSubmit = ((e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.handleLogin(email, password);
  });

  onUpdateLoginField
  render() {
    return (
      <HalfHalfLayout>
        <LoginForm
          title={"Job Explorer"}
          onSubmit={this.onLoginSubmit}
          onChange={this.onLoginFormChange}
        />
      </HalfHalfLayout>
    )
  }
}
export default LoginView;