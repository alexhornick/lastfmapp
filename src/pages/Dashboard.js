import '../App.css';
import React from 'react';
import RecentTrack from '../components/RecentTrack';
import TopArtists from '../components/TopArtists';
import Header from '../components/header/Header';
import { connect } from "react-redux";
import Loader from '../components/loader/Loader';

class Dashboard extends React.Component {

  render() {

    if (!this.props.username.length) {
      this.props.history.push('/');
    }

    if (!this.props.user.hasOwnProperty('user')) {
      return <Loader/>
    }

    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <RecentTrack/>
          <TopArtists/>
        </header>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    username: state.username,
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard);