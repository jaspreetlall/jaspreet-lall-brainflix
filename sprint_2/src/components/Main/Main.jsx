import React from 'react';
import Axios from 'axios';
import Player from '../Player/Player';
import Description from '../Description/Description';
import CommentsSection from '../CommentsSection/CommentsSection';
import Playlist from '../Playlist/Playlist';
import videoPoster from '../../assets/images/video-list-0.jpg';
import videoFile from '../../assets/video/brainstation-sample.mp4';

import './Main.scss';

class Main extends React.Component {

  state = {
    mainVideo: {
      id: "1af0jruup5gu",
      title: "BMX Rampage: 2018 Highlights",
      description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title.",
      channel: "Red Cow",
      image: videoPoster,
      views: "1,001,023",
      likes: "110,985",
      duration: "0:42",
      video: videoFile,
      timestamp: "12/18/2018",
      comments: [
        {
          "name": "Micheal Lyons",
          "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          "id": "b96baa7f-4c3c-4efe-8e08-78fdac1758e7",
          "likes": 0,
          "timestamp": 1530744338878
        },
        {
          "name": "Gary Wong",
          "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          "id": "c8f11008-d6ab-4fae-98a1-c0e428edf499",
          "likes": 0,
          "timestamp": 1530744338878
        },
        {
          "name": "Theodore Duncan",
          "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          "id": "7c4d35be-2a7c-41b1-81b6-3a309d7dd0f5",
          "likes": 0,
          "timestamp": 1530744138878
        }
      ]
    },
    
    playlistArray: []
  }

  apiURL = 'https://project-2-api.herokuapp.com/videos';
  apiKey = '?api_key=7f2b2a75-7c50-4fdd-833d-96e042a472fd';
  
  componentDidMount() {
    console.log('components mounted')
    Axios
    .get(this.apiURL + this.apiKey)
    .then((res) => {
      this.setState({playlistArray: res.data});
    })
    .catch((err) => console.log(err));
  }
  
  componentDidUpdate() {
    console.log(this.state.playlistArray);
  }
  
  render() {
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
              currentVideoID={this.state.mainVideo.id}
              playlistArray={this.state.playlistArray}
            />

          </section>
        </div>
      </div>
    )
  }
}

export default Main;