import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from 'ducks/user';
import DashboardView from './DashboardView';
import jobsApi from 'api/jobsApi';

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
  const { logout, update } = userActions;
  return ({
    handleLogout: (() => {
      dispatch(logout());
    }),
    updateForm: ((jobSearchData) => {
      dispatch(update(jobSearchData));
    }),
    findJobs: (async ({ description, location, fullTime }) => {
      const response = await jobsApi.githubSearchJobs({ description, location, fullTime });
      dispatch(update({ jobs: response }));
    }),
  })
});


export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);