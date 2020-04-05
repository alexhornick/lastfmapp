import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import history from './history';
import './index.css';

import App from './App'
import store from './actions/createReduxStore'
import RecentTrack from './components/RecentTrack';
import TopArtists from './components/TopArtists';
import Dashboard from './pages/Dashboard';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route path="/recent-tracks" component={RecentTrack} />
      <Route path="/top-artists" component={TopArtists} />
    </Router>
  </Provider>,
  document.getElementById('root')
)