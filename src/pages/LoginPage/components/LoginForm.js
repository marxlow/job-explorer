import React from 'react';

const LoginForm = (({ title, onSubmit, onChange }) => {
  return (
    <div className="d-flex align-items-center vh-100">
      <div className="row col-8">
        <h1>{title}</h1>
        <form className="w-100" onSubmit={onSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={onChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
});

export default LoginForm;