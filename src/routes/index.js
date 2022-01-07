import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import HomePage from './Pages/HomePage';
import Error404 from './Pages/404';
import StatCalculator from './Pages/Calculators/StatCalculator';
import Coordinates from './General/Coordinates';

const Routes = () => {
  const location = useLocation();

  if (location.pathname === '/calculators') {
    return <Redirect to={'/calculators/stats'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/coords" component={Coordinates} />
        <Route path="/calculators/stats" component={StatCalculator} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
