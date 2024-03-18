import React, { useState } from 'react';
import './App.css';

import ListUser from './components/ListUser';
import DrawerAddUser from './components/DrawerAddUser';
import DrawerEditUser from './components/DrawerEditUser';

import { Container, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

function App() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [idUser, setIdUser] = useState();
  return (
    <Container style={{ padding: 0 }}>
      <DrawerAddUser open={showAddUser} toggleDrawer={setShowAddUser} />
      <DrawerEditUser idUser={idUser} open={showEditUser} toggleDrawer={setShowEditUser} />
      <ListUser
        editUser={(id) => {
          setIdUser(id);
          setShowEditUser(true);
        }}
      />
      <Fab
        onClick={() => setShowAddUser(true)}
        size={'large'}
        color="primary"
        style={{ position: 'fixed', zIndex: 999, bottom: 40, right: 49 }}>
        <Add />
      </Fab>
    </Container>
  );
}

export default App;
