import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Nav from './components/Nav';
import Upload from './components/Routes/Upload';
import NotFound from './components/Routes/NotFound';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
