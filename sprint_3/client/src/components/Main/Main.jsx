import React from 'react';
import Axios from 'axios';
import Player from '../Player/Player';
import Description from '../Description/Description';
import CommentsSection from '../CommentsSection/CommentsSection';
import Playlist from '../Playlist/Playlist';

import './Main.scss';

class Main extends React.Component {

  defaultVideoId = '1af0jruup5gu'

  state = {
    currentVideoId: '', 
    mainVideo: {},    
    playlistArray: []
  }

  apiURL = 'https://project-2-api.herokuapp.com/videos';
  apiKey = '?api_key=7f2b2a75-7c50-4fdd-833d-96e042a472fd';

  componentDidMount() {
    const directUrlId = this.props.match.params.id;
    this.apiFetchCalls(directUrlId || this.defaultVideoId);
  }

  componentDidUpdate() {
    const currentUrlId = this.props.match.params.id;
    if (currentUrlId && this.state.currentVideoId !== currentUrlId) {
      this.apiFetchCalls(currentUrlId || this.state.defaultVideoId);
      window.scrollTo(0,0)
    }
  }

  apiFetchCalls = (videoUrl) => {
    Axios.all([
      Axios.get(`${this.apiURL}${this.apiKey}`),
      Axios.get(`${this.apiURL}/${videoUrl}${this.apiKey}`)
    ])
    .then((res) => {
      this.setState({
        mainVideo: res[1].data,
        playlistArray: res[0].data,
        currentVideoId: res[1].data.id
      })
    })
    .catch((err) => console.log(err));
  }
  
  render() {
    return (
      <div className="main">
        {/*
          Player Component
            -> stream = URL of video stream
            -> poster = URL of poster image
            -> duration = total video duration
        */}
        <Player 
          stream={this.state.mainVideo.video}
          poster={this.state.mainVideo.image}
          duration={this.state.mainVideo.duration}
        />

        <div className="main__container container">
          <article className="main__container--body">
            {/* 
              Description Component
              -> currentVideo = Object with full info of current video on the page
            */}
            <Description currentVideo = {this.state.mainVideo}/>

            {/* 
              CommentsSection Component
              -> currentVideoId = Video Id of current video on the page
              -> commentsArray = Array of comment objects for current video on the page
            */}
            <CommentsSection
              currentVideoId={this.state.mainVideo.id}
              commentsArray={this.state.mainVideo.comments}
            />
            
          </article>
          <section className="main__container--aside">
            {/* 
              Playlist Component
              -> currentVideoId = Video Id of current video on the page
              -> playlistArray = Array of playlist objects
            */}
            <Playlist
              currentVideoId={this.state.currentVideoId}
              playlistArray={this.state.playlistArray}
            />

          </section>
        </div>
      </div>
    )
  }
}

export default Main;