import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import './Message.css';

const Message = ({ children }) => (
  <Container centered>
    <p className="Message">{children}</p>
  </Container>
);

Message.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Message;
