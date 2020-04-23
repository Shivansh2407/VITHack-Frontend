/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Fullpage.js
// import ReactFullpage from '@fullpage/react-fullpage';
// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

// Components
import HamburgerMenu from './components/layout/navbar/HamburgerMenu';
import Navbar from './components/layout/navbar/Navbar';

// Pages
import MainPage from './pages/MainPage';
import FaqPage from './pages/FaqPage';
import Preloader from './components/layout/Preloader';

// Data
// import { SECTION_ANCHORS, LICENSE_KEY } from './DataStore';

// Stylesheets
import './styles.css';
import './App.css';

// Alert Options
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AlertProvider template={AlertTemplate} {...options}>
        <HamburgerMenu />
        <Navbar />
        <Preloader />
        <Switch>
          <Route exact path='/' component={() => <MainPage />} />
          <Route exact path='/faqs' component={() => <FaqPage />} />
        </Switch>
      </AlertProvider>
    </BrowserRouter>
  );
};

export default App;
