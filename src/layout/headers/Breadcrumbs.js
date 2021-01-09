import React from 'react';

import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <nav className="breadcrumb  has-arrow-separator" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to="/">
            <span className="has-text-gold is-size-6 is-uppercase breadcrumb-item ">
              Home
            </span>
          </Link>
        </li>
        <li className="is-active">
          <Link to="/">
            <span className="has-text-gold is-size-6 is-uppercase has-text-weight-bold  breadcrumb-item ">
              User Details
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
