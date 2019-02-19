import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import * as userActions from 'ducks/user';

class LoginPage extends Component {
  render() {
    return (
      <LoginView {...this.props} />
    )
  }
}

const mapStateToProps = ((state) => {
  return state.user;
});

const mapDispatchToProps = ((dispatch) => {
  const { update } = userActions;
  return ({
    //TODO: This should be an asynchronous call for authentication
    handleLogin: (async (email, password) => {
      // API authetication
      dispatch(update({ email }));
    })
  })
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);