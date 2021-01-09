/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = (props) => {
  const { userDetails } = props;

  const {
    fullName,
    email,
    phoneNumber,
    registrationDate,
    picture = {},
  } = userDetails;

  const { large } = picture;

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image ">
              <img src={large} alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{fullName}</p>
            <p className=" is-6">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className="is-6">Phone: {phoneNumber}</p>
          </div>
        </div>

        <div className="content">
          <p>
            Etiam molestie, ex eget pellentesque sollicitudin, nunc lacus
            aliquam massa, quis lobortis enim metus sit amet ligula. Integer
            tellus leo, dapibus id luctus et, sollicitudin vitae nisl. Aliquam
            maximus et libero vel eleifend. Donec posuere at nisi maximus
            suscipit.
          </p>
          <p>
            Donec faucibus ultricies nisi, ac congue nunc pellentesque sit amet.
            Nullam lacinia tellus nisl, ut consectetur neque pellentesque sit
            amet. In nec accumsan urna. Etiam finibus consectetur nibh quis
            aliquet.
          </p>

          <div>
            <p>
              <span className="has-text-weight-semibold">Joined:</span>{' '}
              <span>{registrationDate}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  userDetails: PropTypes.object,
};

export default UserDetails;
