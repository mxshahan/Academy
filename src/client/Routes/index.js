import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom'

import { 
  indexRouter,
  Public,
  Private
} from './Router';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute'
import Header from '../Components/Paritials/Header';
import { Footer } from '../Components/Paritials/Footer';

export const history = createHistory()

class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <div className="scrollToTop circle"><i className="icon-up-open-big"></i></div>
          <Header history={history}/>
          <Switch>
            {
              indexRouter.map((R, k) => {
                return <Route key={k} path={R.path} component={R.component} exact={R.exact}/>
              })
            }
            {
              Public.map((R, k) => {
                return <PublicRoute key={k} path={R.path} component={R.component} exact={R.exact}/>
              })
            }
            {
              Private.map((R, k) => {
                return <PrivateRoute key={k} path={R.path} component={R.component} exact={R.exact}/>
              })
            }
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default AppRouter
