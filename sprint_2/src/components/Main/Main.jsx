import React from 'react';
import Player from '../Player/Player';
import Description from '../Description/Description';
import CommentsSection from '../CommentsSection/CommentsSection';
import Playlist from '../Playlist/Playlist';
import videoPoster from '../../assets/images/video-list-0.jpg';
import videoFile from '../../assets/video/brainstation-sample.mp4';
import VideoThumb0 from '../../assets/images/video-list-0.jpg';
import VideoThumb1 from '../../assets/images/video-list-1.jpg';
import VideoThumb2 from '../../assets/images/video-list-2.jpg';
import VideoThumb3 from '../../assets/images/video-list-3.jpg';
import VideoThumb4 from '../../assets/images/video-list-4.jpg';
import VideoThumb5 from '../../assets/images/video-list-5.jpg';
import VideoThumb6 from '../../assets/images/video-list-6.jpg';
import VideoThumb7 from '../../assets/images/video-list-7.jpg';
import VideoThumb8 from '../../assets/images/video-list-8.jpg';

import './Main.scss';

class Main extends React.Component {

  state = {
    mainVideo: {
      id: "un1q3-!d3n71f1c@710n-$pec!@l-Cas3-JS",
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
    
    playlistArray: [
      {
        id: "un1q3-!d3n71f1c@710n-$pec!@l-Cas3-JS", 
        title: "BMX Rampage: 2018 Highlights", 
        channel: "Red Cow", 
        image: VideoThumb0
      },
      {
        id: "2aa95850-7dc4-414d-b016-364d347adebd", 
        title: "Become A Travel Pro In One Easy Lesson", 
        channel: "Todd Welch", 
        image: VideoThumb1 
      },
      {
        id: "74966e55-5d55-41d3-b6d1-bbc0fe2d5e9a", 
        title: "Les Houches The Hidden Gem Of The Chamonix", 
        channel: "Cornelia Blair", 
        image: VideoThumb2 
      },
      {
        id: "9247396a-f9e3-4bf9-a7ba-3251d4b70d2f", 
        title: "Travel Health Useful Medical Information For Medical Information For", 
        channel: "Glen Harper", 
        image: VideoThumb3 
      },
      {
        id: "0e4fcaf5-8a1f-4c15-a908-29bbe8674458", 
        title: "Cheap Airline Tickets Great Ways To Save", 
        channel: "Emily Harper", 
        image: VideoThumb4 
      },
      {
        id: "f8460413-33c4-4c9f-83cd-bb3742258746", 
        title: "Take A Romantic Break In A Boutique Hotel", 
        channel: "Ethan Owen", 
        image: VideoThumb5 
      },
      {
        id: "60654ad1-bd04-4505-9a12-f2de800954da", 
        title: "Choose The Perfect Accommodations", 
        channel: "Lydia Perez", 
        image: VideoThumb6 
      },
      {
        id: "ecfc243c-7938-43e5-8b7d-48dd2e7cda8e", 
        title: "Cruising Destination Ideas", 
        channel: "Timothy Austin", 
        image: VideoThumb7 
      },
      {
        id: "f5fdcafe-5675-4041-8012-e2ce859a309e", 
        title: "Train Travel On Track For Safety", 
        channel: "Scotty Cranmer", 
        image: VideoThumb8 
      }
    ]
  }

  currentVideoID = this.state.mainVideo.id;
  playlistArray = this.state.playlistArray;
  
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
              currentVideoID={this.currentVideoID}
              playlistArray={this.playlistArray}
            />

          </section>
        </div>
      </div>
    )
  }
}

export default Main;