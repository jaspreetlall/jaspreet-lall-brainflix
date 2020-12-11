import React from 'react'
import './Player.scss';
import videoPoster from '../../assets/images/video-list-0.jpg';
import iconPlay from '../../assets/icons/Icon-play.svg';
import iconFullScreen from '../../assets/icons/Icon-fullscreen.svg';
import iconVolume from '../../assets/icons/Icon-volume.svg';
import iconScrub from '../../assets/icons/Icon-scrubber-control.svg';

export default function Player() {
  return (
    <section className="player">
      <video className="player__video" poster={videoPoster}></video>
      <div className="player__ctrl container">
        <div className="player__ctrl-play">
          <button className="player__ctrl-play-button">
            <img className="player__ctrl-play-button-icon" src={iconPlay} alt="Play Button"/>
          </button>
        </div>
        <div className="player__ctrl-progress">
          <div className="player__ctrl-progress-bar">
            <div className="player__ctrl-progress-bar-line"></div>
            <img className="player__ctrl-progress-bar-dot" src={iconScrub} alt="Scrubber"/>
          </div>
          <div className="player__ctrl-progress-time">
            <span className="player__ctrl-progress-time-first">0:00</span>
            <span className="player__ctrl-progress-time-separator">/</span>
            <span className="player__ctrl-progress-time-second">0:42</span>
          </div>
        </div>
        <div className="player__ctrl-extra">
          <button className="player__ctrl-extra-fullscreen">
            <img className="player__ctrl-extra-fullscreen-icon" src={iconFullScreen} alt="Fullscreen"/>
          </button>
          <button className="player__ctrl-extra-volume">
            <img className="player__ctrl-extra-volume-icon" src={iconVolume} alt="Volume"/>
          </button>
        </div>
      </div>
    </section>
  )
}