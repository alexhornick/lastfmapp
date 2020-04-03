import './App.css';
import React from 'react';
import RecentTrack from './components/RecentTrack';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      submitted: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username } = e.target;


    console.log(e.target, username.value);

    this.setState(prevState => ({
      submitted: true,
      username: username.value
    }));
  };

  renderRecentTracks() {
    console.log(this.state.username);
    return <RecentTrack username={this.state.username} />
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Please enter your last.fm username:
              <input type="text" name="username" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {this.state.submitted && this.renderRecentTracks()}
        </header>
      </div>
    );
  }
}