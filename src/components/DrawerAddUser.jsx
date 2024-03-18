import React from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { addCity } from '../redux/reducers/citiesSlice';
import { addUser } from '../redux/reducers/usersSlice';

import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Close, PersonAdd } from '@mui/icons-material';
import { MuiTelInput } from 'mui-tel-input';
import { useDebounce } from '../hooks/debounce';
import ButtonIcon from './ButtonIcon';

export default function DrawerAddUser({ toggleDrawer, open }) {
  const { register, handleSubmit, setValue, watch, reset } = useForm();

  const closed = () => {
    if (open) {
      toggleDrawer(false);
      reset();
    }
  };
  const debounce = useDebounce();
  const { cities } = useSelector((state) => state.cities);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleChangePhone = (newValue) => {
    setValue('phone', newValue);
  };

  const onSubmit = (data) => {
    const id = users[users.length - 1]?.id;
    toggleDrawer(false);
    dispatch(
      addUser({
        data: {
          id: id + 1 || 1,
          name: data.name,
          username: data.username,
          email: data.email,
          address: {
            street: data.street,
            suite: data.suite,
            city: data?.city?.value,
            zipcode: data.zipcode,
            geo: {
              lat: '-43.9509',
              lng: '-34.4618'
            }
          },
          phone: data.phone,
          website: data.website,
          company: {
            name: data.company_name,
            catchPhrase: data.company_catchphrase,
            bs: data.company_bs
          }
        }
      })
    );
    reset();
  };

  const onAddCity = (citySearch) => {
    const valueSearch = citySearch;
    dispatch(addCity({ data: valueSearch }));
  };
  return (
    <div>
      <Drawer data-testid="drawer-add" anchor="right" open={open} onClose={closed}>
        <Box sx={{ width: 370, padding: 2 }} role="presentation">
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h5">
              <PersonAdd color="primary" size={30} />
            </Typography>
            <ButtonIcon onClick={closed}>
              <Close />
            </ButtonIcon>
          </Box>
          <form
            data-testid="save"
            style={{ display: 'grid', gap: 15 }}
            onSubmit={handleSubmit(onSubmit)}>
            <TextField size="medium" {...register('name')} label="Name" fullWidth required />
            <TextField
              size="medium"
              {...register('username')}
              label="Username"
              fullWidth
              required
            />
            <TextField size="medium" {...register('email')} label="email" fullWidth required />
            <TextField
              size="medium"
              {...register('street')}
              label="Address Street"
              fullWidth
              required
            />
            <TextField size="medium" {...register('suite')} label="Apt Suite" fullWidth required />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities.map((data) => ({ label: data, value: data }))}
              size="medium"
              defaultValue={watch('city')}
              onSelect={(e) =>
                setValue('city', { label: e?.target?.value, value: e?.target?.value })
              }
              onInputChange={(e) => {
                debounce(() => {
                  onAddCity(e?.target?.value);
                });
              }}
              fullWidth
              required
              renderInput={(params) => <TextField {...params} label="City" fullWidth required />}
            />
            <TextField
              size="medium"
              {...register('zipcode')}
              label="Postal Code"
              fullWidth
              required
            />
            <MuiTelInput
              onChange={handleChangePhone}
              value={watch('phone')}
              size="medium"
              label="Phone"
              fullWidth
              required
            />
            <TextField size="medium" {...register('website')} label="Website" fullWidth required />
            <TextField
              size="medium"
              {...register('company_name')}
              label="Company Name"
              fullWidth
              required
            />
            <TextField
              size="medium"
              {...register('company_catchphrase')}
              label="Company Catch Prase"
              fullWidth
              required
            />
            <TextField
              size="medium"
              {...register('company_bs')}
              label="Company BS"
              fullWidth
              required
            />
            <Button variant="contained" size="large" type="submit">
              Save
            </Button>
          </form>
        </Box>
      </Drawer>
    </div>
  );
}

DrawerAddUser.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func
};
