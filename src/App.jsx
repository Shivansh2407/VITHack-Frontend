// Code maintained and written by Shreyas [www.github.com/HelixW]. If in case anything needs to be changed, feel free to contact me for support.
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import ScrollToTop from 'react-router-scroll-top';
import AOS from 'aos';

// Pages
import MainPage from './pages/MainPage';
import FaqPage from './pages/FaqPage';
import Preloader from './components/layout/Preloader';
import TeamPage from './pages/TeamPage';
import AmbassadorPage from './pages/AmbassadorPage';

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
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <BrowserRouter
      onUpdate={() => window.scrollTo(0, 0)}
      basename={process.env.PUBLIC_URL}
    >
      <AlertProvider template={AlertTemplate} {...options}>
        <ScrollToTop>
          <Preloader />
          <Switch>
            <Route exact path='/faqs' component={() => <FaqPage />} />
            <Route exact path='/team' component={() => <TeamPage />} />
            <Route
              exact
              path='/ambassador'
              component={() => <AmbassadorPage />}
            />
            <Route path='/' component={() => <MainPage />} />
          </Switch>
        </ScrollToTop>
      </AlertProvider>
    </BrowserRouter>
  );
};

export default App;
