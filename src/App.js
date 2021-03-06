import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init({
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='*' component={Home} />
        

      </Switch>

    </Router>
  );
}

export default App;
