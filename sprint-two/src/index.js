import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import Home from './Home';
import UploadPage from './components/Routes/UploadPage';
// import VideoID from './components/Routes/VideoID';
import NotFound from './components/Routes/NotFound';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
        <Route path="/uploadpage" component={UploadPage} />
        {/* <Route path="/videoID" component={VideoID} /> */}
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);
