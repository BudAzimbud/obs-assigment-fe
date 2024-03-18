import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from './ButtonIcon';
import TableData from './Table';

import { deleteUser, getUsers } from '../redux/reducers/usersSlice';

import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Paper, Typography } from '@mui/material';
import { DeleteOutline, Edit, People } from '@mui/icons-material';
import { addCity } from '../redux/reducers/citiesSlice';

function ListUser({ editUser }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { cities } = useSelector((state) => state.cities);
  useEffect(() => {
    dispatch(getUsers({ limit: 20 }));
  }, []);
  const deleteData = (id) => {
    dispatch(deleteUser(id));
  };
  const columns = [
    { id: 'id', label: 'ID', minWidth: 30 },
    {
      id: 'id',
      label: 'Avatar',
      format: () => <Avatar alt="avatar-image" src="https://picsum.photos/id/237/200" />
    },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'username', label: 'Username', minWidth: 100 },
    {
      id: 'email',
      label: 'Email'
    },
    {
      id: 'phone',
      label: 'Phone',
      minWidth: 170
    },
    {
      id: 'website',
      label: 'Website',
      width: 20
    },
    {
      id: 'id',
      label: 'Action',
      minWidth: 180,
      align: 'center',
      format: (value) => (
        <div>
          <ButtonIcon
            onClick={() => {
              deleteData(value);
            }}
            color="error"
            variant="contained">
            <DeleteOutline />
          </ButtonIcon>
          <ButtonIcon
            data-testid="edit-button"
            onClick={() => {
              editUser(value);
              const user = users.find((item) => item.id === value);
              if (cities.find((item) => item === user.address.city) === undefined) {
                dispatch(addCity({ data: user.address.city }));
              }
            }}
            color="primary"
            variant="contained">
            <Edit />
          </ButtonIcon>
        </div>
      )
    }
  ];

  return (
    <div>
      <Paper style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
        <People />
        <Typography>List Users</Typography>
      </Paper>
      <TableData columns={columns} rows={users} page={0} rowsPerPage={20} />
    </div>
  );
}

export default ListUser;

ListUser.propTypes = {
  editUser: PropTypes.func
};
