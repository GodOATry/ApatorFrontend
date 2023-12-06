import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/home/Home';
import AddClient from './components/addClient/AddClient';
import Monitoring from './components/monitoring/Monitoring';

function App() {
  const [clients, setClients] = useState();

  const getClients = async () => {
    try {
      const response = await api.get('/clients');
      setClients(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getClients();
    const intervalId = setInterval(() => {
      getClients();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            Apator Test
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link href="/" color="inherit" >
              Clients List
            </Link>
            <Link href="/add" style={{ margin: '0 30px' }} color="inherit">
              Add Client
            </Link>
            <Link href="/monitor" color="inherit">
              Monitoring
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home clients={clients} />} />
          <Route path="/add" element={<AddClient />} />
          <Route path="/monitor" element={<Monitoring />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
