import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Main from '../pages/Main';
import Search from '../pages/Search';
import Equipe from '../pages/Equipe';
import About from '../pages/About';
import Contato from '../pages/Contato';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact isHome component={Main} />
      <Route path="/oreduc" exact isHome component={About} />
      <Route path="/search" exact isHome component={Search} />
      <Route path="/equipe" exact isHome component={Equipe} />
      <Route path="/contato" exact isHome component={Contato} />
    </Switch>
  );
}
