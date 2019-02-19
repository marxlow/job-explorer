import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from 'ducks/user';
import DashboardView from './DashboardView';

class DashboardPage extends Component {
  render() {
    return (
      <DashboardView {...this.props} />
    )
  }
}

const mapStateToProps = ((state) => {
  return state.user;
});

const mapDispatchToProps = ((dispatch) => {
  const { logout } = userActions;
  return ({
    handleLogout: (() => {
      dispatch(logout());
    })
  })
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);