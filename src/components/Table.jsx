import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Warning } from '@mui/icons-material';
/**
 * CLASS COMPONENTS: METHOD 2
 * Using the `static` class properties syntax
 */
export default function TableData({ rows, columns }) {
  if (rows.length === 0) {
    return (
      <Paper
        style={{
          marginTop: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '20vh',
          textAlign: 'center',
          gap: 10
        }}
        sx={{ width: '100%' }}>
        <Typography>Oops !!! Data is empty</Typography>
        <Warning color="warning" size="large" />
      </Paper>
    );
  }

  return (
    <Paper style={{ marginTop: 10 }} sx={{ width: '100%' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

TableData.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};
