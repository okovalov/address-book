import React from 'react';
import MainHeader from '../../layout/headers/MainHeader';
import MainFooter from '../../layout/footers/MainFooter';
import PropTypes from 'prop-types';

const WithLayout = ({ children, sectionClass = '', containerClass = '' }) => {
  return (
    <>
      <MainHeader />
      <section className={`section ${sectionClass}`}>
        <div className={`container ${containerClass}`}>{children}</div>
      </section>
      <MainFooter />
    </>
  );
};

WithLayout.propTypes = {
  children: PropTypes.bool,
  sectionClass: PropTypes.string,
  containerClass: PropTypes.string,
};

export default WithLayout;
