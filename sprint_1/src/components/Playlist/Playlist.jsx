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

export default function Playlist() {
  return (
    <section className="playlist">
      <h4 className="playlist__title">Next video</h4>
      <ul className="playlist__list">

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb0} alt="Two bikers"/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">BMX Rampage: 2018 Highlights</h4>
              <p className="playlist__list-item-link-info-user">Red Cow</p>
            </div>
          </a>
        </li>

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb1} alt="Bicycle Stunt"/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">Become A Travel Pro In One Easy Lesson</h4>
              <p className="playlist__list-item-link-info-user">Todd Welch</p>
            </div>
          </a>
        </li>

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb2} alt="Umbrellas & Trees"/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">Les Houches The Hidden Gem Of The Chamonix</h4>
              <p className="playlist__list-item-link-info-user">Cornelia Blair</p>
            </div>
          </a>
        </li>

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb3} alt="Fruits Salad Bowl"/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">Travel Health Useful Medical Information</h4>
              <p className="playlist__list-item-link-info-user">Glen Harper</p>
            </div>
          </a>
        </li>

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb4} alt="Village skyline with 2 air balloons"/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">Cheap Airline Tickets Great Ways To Save</h4>
              <p className="playlist__list-item-link-info-user">Emily Harper</p>
            </div>
          </a>
        </li>

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb5} alt="Houses surrounded by water"/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">Take A Romantic Break In A Boutique Hotel</h4>
              <p className="playlist__list-item-link-info-user">Ethan Owen</p>
            </div>
          </a>
        </li>

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb6} alt="Couch along with table with books."/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">Choose The Perfect Accommodations</h4>
              <p className="playlist__list-item-link-info-user">Lydia Perez</p>
            </div>
          </a>
        </li>

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb7} alt="Cruise ship."/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">Cruising Destination Ideas</h4>
              <p className="playlist__list-item-link-info-user">Timothy Austin</p>
            </div>
          </a>
        </li>

        <li className="playlist__list-item">
          <a className="playlist__list-item-link" href="#">
            <div className="playlist__list-item-link-wrapper">
              <img className="playlist__list-item-link-wrapper-thumbnail" src={VideoThumb8} alt="Train over a bridge approaching tunnel."/>
            </div>
            <div className="playlist__list-item-link-info">
              <h4 className="playlist__list-item-link-info-title">Train Travel On Track For Safety</h4>
              <p className="playlist__list-item-link-info-user">Scotty Cranmer</p>
            </div>
          </a>
        </li>

      </ul>
    </section>
  )
}