import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Container.css';

const Container = ({ className, centered, children }) => (
  <div
    className={classNames([
      'Container',
      { 'Container-centered': centered },
      className,
    ])}
  >
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Container;
