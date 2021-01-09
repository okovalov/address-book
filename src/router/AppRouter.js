import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

const UsersListPage = lazy(() => import('../pages/UsersListPage'));
const UserDetailsPage = lazy(() => import('../pages/UserDetailsPage'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact={true} component={UsersListPage} />
          <Route
            path="/user/:userId"
            exact={true}
            component={UserDetailsPage}
          />
          <Route render={() => <div>Ops...</div>} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
