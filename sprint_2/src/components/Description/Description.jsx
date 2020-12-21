import React from 'react';
import './Description.scss';
import iconViews from '../../assets/icons/Icon-views.svg';
import iconLikes from '../../assets/icons/Icon-likes.svg';

export default function Description({currentVideo}) {
  // console.log(currentVideo.channel);
  return (
    <div className="desc desc--container">
      <div className="desc__head">
        <h1 className="desc__head-title">{currentVideo.title}</h1>
        <div className="desc__head-info">
          <div className="desc__head-info-upload">
            <span className="desc__head-info-upload-by">By</span>
            <div className="desc__head-info-upload-user">{currentVideo.channel}</div>
            <div className="desc__head-info-upload-date">{currentVideo.timestamp}</div>
          </div>
          <div className="desc__head-info-stats">
            <div className="desc__head-info-stats-views">
              <img className="desc__head-info-stats-views-icon" src={iconViews} alt="Views icon"/>
              <span className="desc__head-info-stats-views-value">{currentVideo.views}</span>
            </div>
            <div className="desc__head-info-stats-likes">
              <img className="desc__head-info-stats-likes-icon" src={iconLikes} alt="Likes Icon"/>
              <span className="desc__head-info-stats-likes-value">{currentVideo.likes}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="desc__body">{currentVideo.description}</div>
    </div>
  )
}
