import React from 'react';
import { HashRouter } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AppWrapper from './@jumbo/components/AppWrapper';
import AppContextProvider from './@jumbo/components/contextProvider/AppContextProvider';
import Routes from './routes';

const App = () => (
  <HashRouter>
    <AppContextProvider>
      <AppWrapper>
        <Routes />
      </AppWrapper>
    </AppContextProvider>
  </HashRouter>
);

export default App;
