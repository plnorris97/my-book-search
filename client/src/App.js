import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import Library from './pages/Library';
import NoMatch from "./pages/NoMatch";
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Search} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route exact path="/books/library" component={Library} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
