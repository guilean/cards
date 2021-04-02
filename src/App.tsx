import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ROUTE_CARDS, ROUTE_CARD_DETAIL } from '~app';
import { Layout } from '~components/Layout';
import { CardDetail, Cards } from '~features/cards/components';

const App = () => (
  <Layout>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to={ROUTE_CARDS} />
        </Route>
        <Route exact path={ROUTE_CARDS}>
          <Cards />
        </Route>
        <Route path={ROUTE_CARD_DETAIL}>
          <CardDetail />
        </Route>
      </Switch>
    </Router>
  </Layout>
);
export default App;
