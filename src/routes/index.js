import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Error404 from './Pages/404';
import StatCalculator from './Pages/Calculators/StatCalculator';

const Routes = () => {
  const location = useLocation();

  if (location.pathname === '' || location.pathname === '/') {
    return <Redirect to={'/home'} />;
  } else if (location.pathname === '/calculators') {
    return <Redirect to={'/calculators/stats'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/calculators/stats" component={StatCalculator} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
