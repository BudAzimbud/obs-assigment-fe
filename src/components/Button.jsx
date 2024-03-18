import { Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function ButtonComponent({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default ButtonComponent;

ButtonComponent.propTypes = {
  children: PropTypes.element.isRequired
};
