import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UsersListPage from '../pages/UsersListPage';
import UserDetailsPage from '../pages/UserDetailsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={UsersListPage} />
        <Route path="/user/:userId" exact={true} component={UserDetailsPage} />
        <Route render={() => <div>Ops...</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
