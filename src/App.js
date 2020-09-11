import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routesHome } from "./routes";
import HomeTemplate from './templates/Home/Home';
import Page404 from './pages/Page404';

const showMenusHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate key={index} path={item.path} exact={item.exact} Component={item.component} />
      );
    });
  };
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {showMenusHome(routesHome)}
        <Route path='' exact={false} component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
