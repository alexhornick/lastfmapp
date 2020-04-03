import React  from 'react';
import axios from 'axios';
let apiKey = '{yourapikey}';
let baseURL = 'https://ws.audioscrobbler.com/2.0';

export default class RecentTrack extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
            timerID: null,
            recentTracks: []
        }
      }

    fetchRecentTracks() {
        let getRecentTracks = axios.create({
            baseURL: baseURL,
            url: `?format=json&method=user.getrecenttracks&user=${this.props.username}&limit=${9}&api_key=${apiKey}`
          });
        getRecentTracks()
          .then((response) => {
            let recentTracks = response.data;
            this.setState({recentTracks: recentTracks});
          });
    }
    
      componentDidMount() {
        let timerID= setInterval(
            () => this.fetchRecentTracks(),
            500
          );
        this.setState({timerID});
      }

      componentWillUnmount() {
        clearInterval(this.state.timerID);
      }
    
      render() {

        if (!this.state.recentTracks.recenttracks) {
            return <div id="loader"></div>
        }

        clearInterval(this.state.timerID);

        return (
        <div class="animate-bottom">
            <label>Recent Scrobbles:</label>
            <div class="grid">
                {this.state.recentTracks.recenttracks.track.map(
                    (track, index) => 
                        <div class="cell">
                            <img key={index} alt='' src={track.image[2]['#text']}/>
                            <br/>
                            <span class='trackName'>{track.name}</span>
                        </div>
                    )}
            </div>
        </div>
        );
      }
}