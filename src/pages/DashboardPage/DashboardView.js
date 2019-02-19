import React, { Component } from 'react';
import AppHeader from 'shared/layouts/AppHeader';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    // TODO: Set from props
    this.state = {

    }
  }
  
  // Redirects to login page if user is not authenticated
  componentDidUpdate() {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      this.props.history.push("/login");
    }
  }

  onLogout = ((e) => {
    e.preventDefault();
    alert('Warning: Logging out will lose all your progress');
    this.props.handleLogout();
  });

  render() {
    return(
      <div>
        <AppHeader onLogout={this.onLogout}/>
      </div>
    )
  }
}

export default DashboardView;