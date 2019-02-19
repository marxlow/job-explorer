import React, { Component } from 'react';
import AppHeader from 'shared/layouts/AppHeader';
import BooleanInput from 'shared/components/BooleanInput';

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
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
    this.setState({ description: e.target.value });
  });

  addDescription = (() => {
    const { description } = this.state;
    let updatedDescriptions = this.props.descriptions;
    updatedDescriptions.push(description);
    this.props.updateForm({ descriptions: updatedDescriptions });
    this.setState({ description: '' });
  });

  render() {
    const { fullTime, descriptions, location } = this.props;
    const { description } = this.state;

    return (
      <div>
        <AppHeader onLogout={this.onLogout} />
        <section className="d-flex flex-column align-items-center">
          <div className="pt-4">
            <span className="h3 text-dark">Find a job you love</span>
          </div>
          <div className="pt-4 w-50">
            <form className="d-flex flex-column align-items-center">
              {/* Selected Descriptions */}
              <div>
                {descriptions.map((description, key) => {
                  return (
                    <span key={key} className="badge badge-pill badge-light">{description}</span>
                  );
                })}
              </div>

              {/* Adding Descriptions */}
              <div className="input-group my-2">
                <input type="text" className="form-control form-control-lg" placeholder="Single Job Description" onChange={this.updateDescription} value={description} />
                <div className="input-group-append">
                  <button className="btn btn-outline-danger" type="button" onClick={this.addDescription}>Add Description</button>
                </div>
              </div>

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