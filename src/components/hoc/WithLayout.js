import React from 'react';
import PropTypes from 'prop-types';
import MainHeader from '../../layout/headers/MainHeader';
import MainFooter from '../../layout/footers/MainFooter';

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
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  sectionClass: PropTypes.string,
  containerClass: PropTypes.string,
};

export default WithLayout;
