import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import HomePage from './Pages/General/HomePage';
import Error404 from './Pages/404';
import StatCalculator from './Pages/Calculators/StatCalculator';
import Coordinates from './Pages/General/Coordinates';
import Party from './Pages/General/Party';
import Combat from './Pages/General/Combat';
import Cleric from './Pages/Guides/Cleric';

const Routes = () => {
  const location = useLocation();

  if (location.pathname === '/calculators') {
    return <Redirect to={'/calculators/stats'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        {/* General */}
        <Route exact path="/" component={HomePage} />
        <Route path="/coords" component={Coordinates} />
        <Route path="/party" component={Party} />
        <Route path="/combat" component={Combat} />

        {/* Calculator */}
        <Route path="/calculators/stats" component={StatCalculator} />

        {/* Guides */}
        <Route path="/guides/cleric" component={Cleric} />
        <Route path="/guides/fighter" component={Cleric} />
        <Route path="/guides/mage" component={Cleric} />
        <Route path="/guides/monk" component={Cleric} />
        <Route path="/guides/rogue" component={Cleric} />
        <Route path="/guides/newbie" component={Cleric} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
