import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import configureStore from './redux/store';
import AppWrapper from './@jumbo/components/AppWrapper';
import AppContextProvider from './@jumbo/components/contextProvider/AppContextProvider';
import Routes from './routes';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <AppContextProvider>
        <AppWrapper>
          <Routes />
        </AppWrapper>
      </AppContextProvider>
    </HashRouter>
  </Provider>
);

export default App;
