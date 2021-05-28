import { Main } from "@pages";
import { history } from "@store";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router";
import css from "./App.module.scss";

function App() {
  return (
    <div className={css.App}>
      <div id={css.appWrapper}>
        <ConnectedRouter history={history}>
          <Switch>
            {/* TODO add pages for login/register */}
            <Route path="/login"></Route>
            <Route path="/register"></Route>
            <Route path="/" component={Main}></Route>
          </Switch>
        </ConnectedRouter>
      </div>
    </div>
  );
}

export default App;
