import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import HomePage from './Pages/General/HomePage';
import Error404 from './Pages/404';
import StatCalculator from './Pages/Calculators/StatCalculator';
import Coordinates from './Pages/General/Coordinates';
import Party from './Pages/General/Party';
import Combat from './Pages/General/Combat';
import Cleric from './Pages/Guides/Cleric';
import Fighter from './Pages/Guides/Fighter';
import Mage from './Pages/Guides/Mage';
import Monk from './Pages/Guides/Monk';
import Rogue from './Pages/Guides/Rogue';
import Newbie from './Pages/Guides/Newbie';

const Routes = () => {
  const location = useLocation();

  if (location.pathname === '/calculators') {
    return <Redirect to={'/calculators/stats'} />;
  } else if (location.pathname === '/guides') {
    return <Redirect to={'/guides/cleric'} />;
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
        <Route path="/guides/fighter" component={Fighter} />
        <Route path="/guides/mage" component={Mage} />
        <Route path="/guides/monk" component={Monk} />
        <Route path="/guides/rogue" component={Rogue} />
        <Route path="/guides/newbie" component={Newbie} />
        <Route component={Error404} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
