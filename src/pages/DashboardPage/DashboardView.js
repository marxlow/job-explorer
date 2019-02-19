import React, { Component } from 'react';
import AppHeader from 'shared/layouts/AppHeader';
import BooleanInput from 'shared/components/BooleanInput';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
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

  toggleFullTime = ((e) => {
    const prevFullTime = this.props.fullTime;
    this.props.updateForm({ fullTime: !prevFullTime });
  });

  updateLocation = ((e) => {
    this.props.updateForm({ location: e.target.value });
  });

  updateDescription = ((e) => {
    this.props.updateForm({ description: e.target.value });
  });

  render() {
    const { fullTime, description, location } = this.props;
    const { isLoading } = this.state;

    return (
      <div>
        <AppHeader onLogout={this.onLogout} />
        <section className="d-flex flex-column align-items-center">
          <div className="pt-4">
            <span className="h3 text-dark">Find a job you love</span>
          </div>
          {/* Form for job searching */}
          <div className="pt-4 w-50">
            <form className="d-flex flex-column align-items-center">

              {/* For Description */}
              <input
                className="form-control form-control-lg my-2"
                type="text"
                placeholder="Your Job Description"
                value={description}
                onChange={this.updateDescription}
              />

              {/* For Location */}
              <input
                className="form-control form-control-lg my-2"
                type="text"
                placeholder="Your Location"
                value={location}
                onChange={this.updateLocation}
              />

              {/* For FT position or not */}
              <BooleanInput
                className="form-check mb-4"
                name="Full-time Position"
                id="fullTimeRadio"
                checked={fullTime}
                onChange={this.toggleFullTime}
              />

              {/* Submit button */}
              <button className="btn btn-outline-danger" type="submit">Get Hired!</button>
            </form>
          </div>
        </section>
      </div >
    )
  }
}

export default DashboardView;