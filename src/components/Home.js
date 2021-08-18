import React, { Component } from 'react';
import { PostsList } from './';
import Chat from './Chat';
import FriendsList from './FriendsList';

class Home extends Component {
  render() {
    const { posts, friends, isLoggedin } = this.props;
    console.log('HOME_____________', this.props);
    return (
      <div className="home">
        <PostsList posts={posts} />
        {isLoggedin && <FriendsList friends={friends} />}
        {/* {isLoggedin && <Chat />} */}
      </div>
    );
  }
}

export default Home;
