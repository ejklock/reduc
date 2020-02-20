import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from '../pages/Main';
import Painel from '../pages/Painel';
import Search from '../pages/Search';
import Dashboard from '../pages/Dashboard';
import Equipe from '../pages/Equipe';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact isHome component={Main} />
      <Route path="/search" exact isHome component={Search} />
      <Route path="/equipe" exact isHome component={Equipe} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/painel" isPrivate component={Painel} />
    </Switch>
  );
}
