import React from 'react';
import Axios from 'axios';
import Player from '../Player/Player';
import Description from '../Description/Description';
import CommentsSection from '../CommentsSection/CommentsSection';
import Playlist from '../Playlist/Playlist';

import './Main.scss';

class Main extends React.Component {

  state = {
    
    defaultVideo: '1af0jruup5gu',

    currentVideo: '1af0jruup5gu',

    mainVideo: {},
    
    playlistArray: []
  }

  apiURL = 'https://project-2-api.herokuapp.com/videos';
  apiKey = '?api_key=7f2b2a75-7c50-4fdd-833d-96e042a472fd';

  componentDidMount() {
    console.log('mounted')
    Axios.all([
      Axios.get(`${this.apiURL}${this.apiKey}`),
      Axios.get(`${this.apiURL}/${this.state.defaultVideo}${this.apiKey}`)
    ])
    .then((res) => {
      this.setState({
        mainVideo: res[1].data,
        playlistArray: res[0].data
      })
    })
    .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log('update')
    const currentUrlId = this.props.match.params.id;
    if (currentUrlId && this.state.currentVideo !== currentUrlId) {
      Axios.all([
        Axios.get(`${this.apiURL}${this.apiKey}`),
        Axios.get(`${this.apiURL}/${currentUrlId}${this.apiKey}`)
      ])
      .then((res) => {
        console.log('result - axios, ', res)
        this.setState({
          mainVideo: res[1].data,
          playlistArray: res[0].data,
          currentVideo: currentUrlId
        })
      })
      .catch((err) => console.log(err));
    }
  }
  
  render() {
    // console.log(this.state.mainVideo.comments)
    return (
      <div className="main">

        <Player 
          stream={this.state.mainVideo.video}
          poster={this.state.mainVideo.image}
          duration={this.state.mainVideo.duration}
        />

        <div className="main__container container">
          <article className="main__container--body">

            <Description currentVideo = {this.state.mainVideo}/>

            <CommentsSection
              currentVideoID={this.state.mainVideo.id}
              commentsArray={this.state.mainVideo.comments}
            />
            
          </article>
          <section className="main__container--aside">

            <Playlist
              currentVideoID={this.state.currentVideo}
              playlistArray={this.state.playlistArray}
            />

          </section>
        </div>
      </div>
    )
  }
}

export default Main;