import './Header.css';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {
      return <div className='profileImage'>
          <img alt='profilePicture' src={this.props.user.user.image[1]['#text']}/>
          <br/>
          <label>Welcome, {this.props.username}</label>
        </div>
    }
}

const mapStateToProps = function(state) {
    return {
      username: state.username,
      user: state.user
    }
  }

export default connect(mapStateToProps)(Header);