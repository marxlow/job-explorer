import React from 'react';
import cleanHtml from 'utils/cleanHtml';

const JobCard = (({ type, url, company, location, title, description, logo, key }) => {
  const trimmedDescription = cleanHtml(description);
  return (
    <div className="card col-4 mt-4">
      {/* TODO: Use logo */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div class="dropdown-divider" />
        <h6 className="card-subtitle text-muted m-0">{`${company}`}</h6>
        <div class="dropdown-divider" />
        <h6 className="card-subtitle text-muted m-0">{location}</h6>
        <div class="dropdown-divider" />
        <h6 className="card-subtitle text-muted m-0">{type}</h6>
        <div class="dropdown-divider" />
        <p className="card-text text-truncate">{trimmedDescription}</p>
        <a href={url} className="card-link">Go to Company</a>
      </div>
    </div>
  )
});

export default JobCard;