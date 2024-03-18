import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

export default function Input(props) {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 1%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...props
      }}>
      <InputBase style={{ width: '100%' }} {...props} />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        {props?.prefixIcon ? props?.prefixIcon : <SearchIcon />}
      </IconButton>
    </Paper>
  );
}

Input.propTypes = {
  prefixIcon: PropTypes.bool
};
