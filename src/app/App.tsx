import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppRoutes } from './routes';
import Axios from "axios";

Axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <AppRoutes></AppRoutes>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
