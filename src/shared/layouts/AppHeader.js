import React from 'react';

const AppHeader = (({onLogout}) => {
  return (
    <nav className="navbar navbar-light bg-brand-grad px-4">
      <div className="d-flex justify-content-between w-100">
        <a className="navbar-brand text-dark" href="/">
          <h2>Job Explorer</h2>
        </a>
        <button className="btn btn-outline-danger btn-lg" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
});

export default AppHeader;