import React from 'react';
import './Description.scss';
import iconViews from '../../assets/icons/Icon-views.svg';
import iconLikes from '../../assets/icons/Icon-likes.svg';

export default function Description() {
  return (
    <div className="desc desc--container">
      <div className="desc__head">
        <h1 className="desc__head-title">BMX Rampage: 2018 Highlights</h1>
        <div className="desc__head-info">
          <div className="desc__head-info-upload">
            <span className="desc__head-info-upload-by">By</span>
            <div className="desc__head-info-upload-user">Red Cow</div>
            <div className="desc__head-info-upload-date">12/18/2018</div>
          </div>
          <div className="desc__head-info-stats">
            <div className="desc__head-info-stats-views">
              <img className="desc__head-info-stats-views-icon" src={iconViews} alt="Views icon"/>
              <span className="desc__head-info-stats-views-value">1,001,023</span>
            </div>
            <div className="desc__head-info-stats-likes">
              <img className="desc__head-info-stats-likes-icon" src={iconLikes} alt="Likes Icon"/>
              <span className="desc__head-info-stats-likes-value">110,985</span>
            </div>
          </div>
        </div>
      </div>
      <div className="desc__body">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title.
      </div>
    </div>
  )
}
