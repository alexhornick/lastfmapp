import React  from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

let apiKey = process.env.REACT_APP_API_KEY;
let baseURL = process.env.REACT_APP_API_URL;

class TopArtists extends React.Component {

      constructor(props) {
        super(props);

        this.state = {
            topArtists: []
        }
      }

    fetchTopArtists() {
        // for now, if they refresh, go back to home page.
        // Eventually I'll make this persist.
        if (!this.props.username.length) {
            this.props.history.push('/');
        }
        let username = this.props.username;
        let getTopArtists = axios.create({
            baseURL: baseURL,
            url: `?format=json&method=user.gettopartists&user=${username}&limit=${10}&api_key=${apiKey}`
          });
          getTopArtists()
          .then((response) => {
            let topArtists = response.data;
            this.setState({topArtists: topArtists});
          });
    }
    
      componentDidMount() {
        this.fetchTopArtists();
      }
    
      render() {

        if (!this.state.topArtists.topartists) {
            return <div id="loader"></div>
        }

        console.log(this.state.topArtists);

        return (
        <div className="animate-bottom">
            <label>Top Artists:</label>
            <div className="grid">
                {this.state.topArtists.topartists.artist.map(
                    (artist, index) => 
                        <div key={index} className="cell">
                            <span className='trackName'>{artist.name}</span>
                        </div>
                    )}
            </div>
        </div>
        );
      }
}

const mapStateToProps = function(state) {
    return {
      username: state.username
    }
  }
  
export default connect(mapStateToProps)(TopArtists);