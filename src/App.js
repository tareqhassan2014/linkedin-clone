import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Longin from './components/Longin';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Longin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;