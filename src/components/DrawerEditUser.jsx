import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import { Autocomplete, Avatar, Button, TextField, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import { addCity } from '../redux/reducers/citiesSlice';
import { editUser } from '../redux/reducers/usersSlice';
import { addCity } from '../redux/reducers/citiesSlice';
import { useDebounce } from '../hooks/debounce';
import { Close } from '@mui/icons-material';
import ButtonIcon from './ButtonIcon';
import { toast } from 'react-toastify';
export default function DrawerEditUser({ toggleDrawer, open, idUser }) {
  const { register, handleSubmit, setValue, watch, reset } = useForm();
  const closed = () => {
    if (open) {
      toggleDrawer(false);
      reset();
    }
  };
  const { cities } = useSelector((state) => state.cities);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const debounce = useDebounce();
  const handleChangePhone = (newValue) => {
    setValue('phone', newValue);
  };
  const user = useMemo(() => {
    return users.find((item) => item.id === idUser);
  }, [idUser, users]);
  React.useEffect(() => {
    if (open) {
      reset({
        name: user.name,
        username: user.username,
        email: user.email,
        street: user?.address?.street,
        suite: user?.address?.suite,
        zipcode: user.address?.zipcode,
        geo: {
          lat: '-43.9509',
          lng: '-34.4618'
        },
        phone: user.phone,
        website: user.website,
        company_name: user.company?.name,
        company_catchphrase: user?.company?.catchPhrase,
        company_bs: user?.company?.bs
      });
    }
  }, [open]);

  useEffect(() => {
    dispatch(addCity({ data: user?.address?.city }));
    setValue('city', { label: user?.address?.city, value: user?.address?.city });
  }, [cities]);

  const onSubmit = (data) => {
    toggleDrawer(false);
    dispatch(
      editUser({
        data: {
          avatar: user?.avatar,
          id: user.id,
          name: data.name,
          username: data.username,
          email: data.email,
          address: {
            street: data.street,
            suite: data.suite,
            city: data?.city?.value ? data?.city?.value : user?.address?.city,
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
    toast.success(`Successfully update user ${user.username}!`, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    });
    reset();
  };

  const onAddCity = (citySearch) => {
    dispatch(addCity({ data: citySearch }));
    setValue('city', { label: citySearch, value: citySearch });
  };

  return (
    <div>
      <Drawer data-testid="drawer-edit" anchor="right" open={open} onClose={closed}>
        <Box sx={{ width: 370, padding: 2 }} role="presentation">
          {!user ? (
            <div>loading</div>
          ) : (
            <form
              data-testid="update"
              style={{ display: 'grid', gap: 15 }}
              onSubmit={handleSubmit(onSubmit)}>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">
                  <Avatar src={user?.avatar} />
                </Typography>
                <ButtonIcon onClick={closed}>
                  <Close />
                </ButtonIcon>
              </Box>
              <TextField size="medium" {...register('name')} label="Name" fullWidth required />
              <TextField
                size="medium"
                {...register('username')}
                label="Username"
                fullWidth
                required
              />
              <TextField
                type="email"
                size="medium"
                {...register('email')}
                label="email"
                fullWidth
                required
              />
              <TextField
                size="medium"
                {...register('street')}
                label="Address Street"
                fullWidth
                required
              />
              <TextField
                size="medium"
                {...register('suite')}
                label="Apt Suite"
                fullWidth
                required
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities.map((data) => ({ label: data, value: data }))}
                size="medium"
                defaultValue={{ label: user.address.city, value: user.address.city }}
                onChange={(e, v) => {
                  setValue('city', v);
                }}
                fullWidth
                required
                renderInput={(params) => (
                  <TextField
                    onChange={(e) => {
                      debounce(() => {
                        onAddCity(e?.target?.value);
                      });
                    }}
                    {...params}
                    label="City"
                    fullWidth
                    required
                  />
                )}
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
              <TextField
                size="medium"
                {...register('website')}
                label="Website"
                fullWidth
                required
              />
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
          )}
        </Box>
      </Drawer>
    </div>
  );
}

DrawerEditUser.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  idUser: PropTypes.number
};
