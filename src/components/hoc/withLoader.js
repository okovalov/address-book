/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import Loader from '../common/Loader';

const withLoader = (WrappedComponent) => {
  return (props) => {
    if (props.isLoading) {
      return <Loader />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
