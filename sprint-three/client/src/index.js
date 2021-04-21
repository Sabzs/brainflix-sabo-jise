import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import Home from './Home';
import UploadPage from './components/UploadPage';
import NotFound from './components/NotFound';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch >
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
        <Route path="/video/:id" component={Home} />
        <Route path="/uploadpage" component={UploadPage} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);



