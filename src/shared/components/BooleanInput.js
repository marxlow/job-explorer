import React from 'react';

const BooleanInput = (({ onChange, checked, id, className, name }) => {
  return (
    <div className={className}>
      <input className="form-check-input" type="checkbox" name="fullTime" id={id} checked={checked} onChange={onChange} />
      <label className="form-check-label" htmlFor={id}>{name}</label>
    </div>
  );
});

export default BooleanInput;