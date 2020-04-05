import React from 'react';
import { Router, Route } from 'react-router';
import App from '../App';
import RecentTrack from '../components/RecentTrack'
import TopArtists from '../components/TopArtists';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={App}/>
      <Route exact path="/recent-tracks" component={RecentTrack}/>
      <Route exact path="/top-artists" component={TopArtists}/>
    </Router>
);

export default createRoutes;