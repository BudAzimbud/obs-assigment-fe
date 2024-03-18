import { IconButton } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function ButtonIcon({ children, ...props }) {
  return <IconButton {...props}>{children}</IconButton>;
}

export default ButtonIcon;

ButtonIcon.propTypes = {
  children: PropTypes.element.isRequired
};
