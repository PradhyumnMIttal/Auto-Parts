import React from 'react';
import Home from './Home';
import "./App.css";
import Header from './Header';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from '@mui/material';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Router>
        <Routes>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Header />
          <Checkout />
        </Routes>
      </Router> */}
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/user/account/:userId" element={<MyAccount />} />
            <Route
              path="/user/account/updateProfile/:userId"
              element={<Profile />}
            />
            <Route
              path="/user/dashboard/:userId"
              method="POST"
              element={<Dashboard />}
            />
            <Route path="/project/:id" element={<Project />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} /> */}
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
