import './App.css';
import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";

let apiKey = process.env.REACT_APP_API_KEY;
let baseURL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  
  handleSubmit = e => {
    e.preventDefault();

    const { username } = e.target;

    let getUserInfo = axios.create({
      baseURL: baseURL,
      url: `?format=json&method=user.getinfo&user=${username.value}&limit=${9}&api_key=${apiKey}`
    });
    getUserInfo()
      .then(response => response.data)
      .then(response => {
        this.props.dispatch({
          type: "SET_USER",
          user: response
        });
      });

    this.props.dispatch({
      type: "SET_USERNAME",
      username: username.value
    });
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Please enter your last.fm username:
              <input type="text" name="username" required onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(App);