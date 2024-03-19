import React, { useState } from 'react';

import ListUser from './components/ListUser';
import DrawerAddUser from './components/DrawerAddUser';
import DrawerEditUser from './components/DrawerEditUser';

import { Box, Container, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

import ErrorBoundary from './ErrorBoundary';

import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [idUser, setIdUser] = useState();
  const [formDisabled, setFormDisabled] = useState(false);
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Container data-testid="container" style={{ padding: 0 }}>
          <DrawerAddUser open={showAddUser} toggleDrawer={setShowAddUser} />
          <DrawerEditUser
            idUser={idUser}
            open={showEditUser}
            toggleDrawer={setShowEditUser}
            formDisabled={formDisabled}
            setFormDisabled={setFormDisabled}
          />
          <ListUser
            editUser={(id) => {
              setIdUser(id);
              setShowEditUser(true);
              setFormDisabled(false);
            }}
            viewUser={(id) => {
              setIdUser(id);
              setShowEditUser(true);
              setFormDisabled(true);
            }}
          />
          <Fab
            onClick={() => setShowAddUser(true)}
            size={'large'}
            color="primary"
            style={{ position: 'fixed', zIndex: 999, bottom: 40, right: 36 }}>
            <Add />
          </Fab>
          <Box style={{ paddingTop: 100 }}></Box>
        </Container>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
