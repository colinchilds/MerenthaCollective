import React, { Fragment, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router';
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
import SkillCalculator from './Pages/Calculators/SkillCalculator';
import Maps from './Pages/General/Maps';
import Builder from './Pages/Guides/Builder';
import BuilderRooms from './Pages/Guides/Builder/Rooms';
import HomePage from './Pages/General/Home';
import Socials from './Pages/General/Socials';
import Fireworks from './Pages/General/Fireworks';
import Rolling from './Pages/General/Rolling';

function ScrollToTop({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Fragment>{children}</Fragment>;
}

const Routes = () => {
  const location = useLocation();

  if (location.pathname === '/calculators') {
    return <Redirect to={'/calculators/stats'} />;
  } else if (location.pathname === '/guides') {
    return <Redirect to={'/guides/cleric'} />;
  }

  return (
    <Fragment>
      <ScrollToTop>
        <Switch>
          {/* General */}
          <Route exact path="/" component={HomePage} />
          <Route path="/coords" component={Coordinates} />
          <Route path="/maps" component={Maps} />
          <Route path="/party" component={Party} />
          <Route path="/combat" component={Combat} />
          <Route path="/socials" component={Socials} />
          <Route path="/fireworks" component={Fireworks} />
          <Route path="/rolling" component={Rolling} />

          {/* Calculator */}
          <Route path="/calculators/stats" component={StatCalculator} />
          <Route path="/calculators/skills" component={SkillCalculator} />

          {/* Guides */}
          <Route path="/guides/cleric" component={Cleric} />
          <Route path="/guides/fighter" component={Fighter} />
          <Route path="/guides/mage" component={Mage} />
          <Route path="/guides/monk" component={Monk} />
          <Route path="/guides/rogue" component={Rogue} />
          <Route path="/guides/newbie" component={Newbie} />
          <Route path="/guides/builder/rooms" component={BuilderRooms} />
          <Route path="/guides/builder" component={Builder} />
          <Route component={Error404} />
        </Switch>
      </ScrollToTop>
    </Fragment>
  );
};

export default Routes;
