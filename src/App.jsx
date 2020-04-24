/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ScrollToTop from 'react-router-scroll-top';

// Fullpage.js
// import ReactFullpage from '@fullpage/react-fullpage';
// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

// Components
import HamburgerMenu from './components/layout/navbar/HamburgerMenu';

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
    <BrowserRouter
      onUpdate={() => window.scrollTo(0, 0)}
      basename={process.env.PUBLIC_URL}
    >
      <AlertProvider template={AlertTemplate} {...options}>
        <ScrollToTop>
          <HamburgerMenu />
          <Preloader />
          <Switch>
            <Route exact path='/' component={() => <MainPage />} />
            <Route exact path='/faqs' component={() => <FaqPage />} />
          </Switch>
        </ScrollToTop>
      </AlertProvider>
    </BrowserRouter>
  );
};

export default App;
