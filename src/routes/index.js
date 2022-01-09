import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import HomePage from './Pages/General/HomePage';
import Error404 from './Pages/404';
import StatCalculator from './Pages/Calculators/StatCalculator';
import Coordinates from './Pages/General/Coordinates';
import Party from './Pages/General/Party';
import Combat from './Pages/General/Combat';

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
        <Route path="/party" component={Party} />
        <Route path="/combat" component={Combat} />
        <Route path="/calculators/stats" component={StatCalculator} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
