import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import AboutPage from '../components/AboutPage';
import SignupPage from '../components/SignupPage';
import ContactPage from '../components/ContactPage';
import ReturnPolicy from '../components/ReturnPolicy';
import Faq from '../components/Faq';
import LocatorPage from '../components/LocatorPage';
import BulkPurchasePage from '../components/BulkPurchasePage';
import SellPage from '../components/SellPage';
import CartPage from '../components/CartPage';
import LikePage from '../components/LikePage';
// import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={DashboardPage} exact={true} />
        <PublicRoute path="/about" component={AboutPage} />
        <PublicRoute path="/cart" component={CartPage} />
        <PublicRoute path="/like" component={LikePage} />
        <PublicRoute path="/signup" component={SignupPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/contacts" component={ContactPage}/>
        <PublicRoute path="/return" component={ReturnPolicy}/>
        <PublicRoute path="/faq" component={Faq}/>
        <PublicRoute path="/locate" component={LocatorPage}/>
        <PublicRoute path="/bulk" component={BulkPurchasePage}/>
        <PublicRoute path="/sell" component={SellPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
