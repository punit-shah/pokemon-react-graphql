import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Container.css';

const Container = ({ className, children }) => (
  <div className={classNames(['Container', className])}>{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
