import React  from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import Loader from './loader/Loader';

let apiKey = process.env.REACT_APP_API_KEY;
let baseURL = process.env.REACT_APP_API_URL;

class RecentTrack extends React.Component {

      constructor(props) {
        super(props);

        this.state = {
            recentTracks: []
        }
      }

    fetchRecentTracks() {
        // for now, if they refresh, go back to home page.
        // Eventually I'll make this persist.
        if (!this.props.username.length) {
            this.props.history.push('/');
        }
        let username = this.props.username;
        let getRecentTracks = axios.create({
            baseURL: baseURL,
            url: `?format=json&method=user.getrecenttracks&user=${username}&limit=${9}&api_key=${apiKey}`
          });
        getRecentTracks()
          .then((response) => {
            let recentTracks = response.data;
            this.setState({recentTracks: recentTracks});
          });
    }
    
      componentDidMount() {
        this.fetchRecentTracks();
      }

      componentWillUnmount() {
        clearInterval(this.state.timerID);
      }
    
      render() {

        if (!this.state.recentTracks.recenttracks) {
            return <Loader/>
        }

        return (
        <div className="animate-bottom">
            <label>Recent Scrobbles:</label>
            <div className="grid">
                {this.state.recentTracks.recenttracks.track.map(
                    (track, index) => 
                        <div key={index}className="cell">
                            <img alt='' src={track.image[2]['#text']}/>
                            <br/>
                            <span className='trackName'>{track.name}</span>
                        </div>
                    )}
            </div>
        </div>
        );
      }
}

const mapStateToProps = function(state) {
    return {
      username: state.username,
      user: state.user
    }
  }
  
export default connect(mapStateToProps)(RecentTrack);