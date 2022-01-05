import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const ExtraPages = ({ match }) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route component={lazy(() => import('./404'))} />
      </Switch>
    </Suspense>
  );
};

export default ExtraPages;
