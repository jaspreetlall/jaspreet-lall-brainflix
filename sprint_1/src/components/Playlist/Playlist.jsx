import React from 'react';
import './Playlist.scss';
import VideoThumb0 from '../../assets/images/video-list-0.jpg';
import VideoThumb1 from '../../assets/images/video-list-1.jpg';
import VideoThumb2 from '../../assets/images/video-list-2.jpg';
import VideoThumb3 from '../../assets/images/video-list-3.jpg';
import VideoThumb4 from '../../assets/images/video-list-4.jpg';
import VideoThumb5 from '../../assets/images/video-list-5.jpg';
import VideoThumb6 from '../../assets/images/video-list-6.jpg';
import VideoThumb7 from '../../assets/images/video-list-7.jpg';
import VideoThumb8 from '../../assets/images/video-list-8.jpg';

var playlistArray = [
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
    title: "Travel Health Useful Medical Information For", 
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
];

function Playlist({currentVideoID}) {

  return (
    <section className="playlist">
      <h4 className="playlist__title">Next video</h4>
      <ul className="playlist__list">

        {playlistArray
          .filter(videoItem => videoItem.id !== currentVideoID)
          .map((videoItem) => {
            return (
              <li className="playlist__list-item" key={videoItem.id}>
                <a className="playlist__list-item-link" href="/#">
                  {/* Will include proper links in future sprint. */}
                  <div 
                    className="playlist__list-item-link-thumb"
                    style={{backgroundImage: `url(${videoItem.image})`}}
                  >
                  </div>
                  <div className="playlist__list-item-link-info">
                    <h4 className="playlist__list-item-link-info-title">{videoItem.title}</h4>
                    <p className="playlist__list-item-link-info-user">{videoItem.channel}</p>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Playlist