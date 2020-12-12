import React from 'react';
import './NextVideo.scss';
import VideoThumb0 from '../../assets/images/video-list-0.jpg';
import VideoThumb1 from '../../assets/images/video-list-1.jpg';
import VideoThumb2 from '../../assets/images/video-list-2.jpg';
import VideoThumb3 from '../../assets/images/video-list-3.jpg';
import VideoThumb4 from '../../assets/images/video-list-4.jpg';
import VideoThumb5 from '../../assets/images/video-list-5.jpg';
import VideoThumb6 from '../../assets/images/video-list-6.jpg';
import VideoThumb7 from '../../assets/images/video-list-7.jpg';
import VideoThumb8 from '../../assets/images/video-list-8.jpg';

export default function NextVideo() {
  return (
    <section>
      <h4>Next video</h4>
      <ul>

        <li>
          <a href="#">
            <div><img src={VideoThumb0} alt="Two bikers"/></div>
            <div>
              <h4>BMX Rampage: 2018 Highlights</h4>
              <p>Red Cow</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div><img src={VideoThumb1} alt="Bicycle Stunt"/></div>
            <div>
              <h4>Become A Travel Pro In One Easy Lesson</h4>
              <p>Todd Welch</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div><img src={VideoThumb2} alt="Umbrellas & Trees"/></div>
            <div>
              <h4>Les Houches The Hidden Gem Of The Chamonix</h4>
              <p>Cornelia Blair</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div><img src={VideoThumb3} alt="Fruits Salad Bowl"/></div>
            <div>
              <h4>Travel Health Useful Medical Information</h4>
              <p>Glen Harper</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div><img src={VideoThumb4} alt="Village skyline with 2 air balloons"/></div>
            <div>
              <h4>Cheap Airline Tickets Great Ways To Save</h4>
              <p>Emily Harper</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div><img src={VideoThumb5} alt="Houses surrounded by water"/></div>
            <div>
              <h4>Take A Romantic Break In A Boutique Hotel</h4>
              <p>Ethan Owen</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div><img src={VideoThumb6} alt="Couch along with table with books."/></div>
            <div>
              <h4>Choose The Perfect Accommodations</h4>
              <p>Lydia Perez</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div><img src={VideoThumb7} alt="Cruise ship."/></div>
            <div>
              <h4>Cruising Destination Ideas</h4>
              <p>Timothy Austin</p>
            </div>
          </a>
        </li>

        <li>
          <a href="#">
            <div><img src={VideoThumb8} alt="Train over a bridge approaching tunnel."/></div>
            <div>
              <h4>Train Travel On Track For Safety</h4>
              <p>Scotty Cranmer</p>
            </div>
          </a>
        </li>

      </ul>
    </section>
  )
}

// 
// 

// 
// 
