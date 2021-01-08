import React from 'react';

const MainHeader = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="header-content-container">
            <div className="header-icon-container">
              <span className="icon-text">
                <span className="icon has-text-gold">
                  <i className="fas fa-home fa-3x"></i>
                </span>
              </span>
            </div>
            <div className="header-title-container ">
              <span className="has-text-gold is-size-4 ">Address Book</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
