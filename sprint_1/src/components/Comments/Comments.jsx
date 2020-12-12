import React from 'react';
import './Comments.scss';
import UserPhoto from '../../assets/images/Mohan-muruge.jpg'

export default function Comments() {
  return (
    <div>
      <section className="form-section">
        <h4 className="form-section__comment"><span className="form-section__comment-count">3</span> Comments</h4>
        <div className="form-section__block">
          <div className="form-section__block-wrapper">
            <img className="form-section__block-wrapper-img" src={UserPhoto} alt="User"/>
          </div>
          <form className="form-section__block-form" id="commentForm">
          
            <div className="form-section__block-form-section">
              <label className="form-section__block-form-section-label" htmlFor="userComment">Join the conversation</label>
              <textarea
                className="form-section__block-form-section-input"
                type="text"
                name="userComment"
                id="userComment"
                rows="3"
                placeholder="Add a new comment"></textarea>
            </div>

            <button className="form-section__block-form-button" type="submit">Comment</button>
          </form>
        </div>
      </section>

      <section className="comments">
        <div className="comments__container" id="commentsBlock">

          <div className="comments__container-block">
            <div className="comments__container-block-wrapper"></div>
            <div className="comments__container-block-content">
              <div className="comments__container-block-content-head">
                <h5 className="comments__container-block-content-head-name">Micheal Lyons</h5>
                <span className="comments__container-block-content-head-timestamp">12/18/2018</span>
              </div>
              <div className="comments__container-block-content-para">
                They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.
              </div>
            </div>
          </div>

          <div className="comments__container-block">
            <div className="comments__container-block-wrapper"></div>
            <div className="comments__container-block-content">
              <div className="comments__container-block-content-head">
                <h5 className="comments__container-block-content-head-name">Gary Wong</h5>
                <span className="comments__container-block-content-head-timestamp">12/18/2018</span>
              </div>
              <div className="comments__container-block-content-para">
                Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!
              </div>
            </div>
          </div>

          <div className="comments__container-block">
            <div className="comments__container-block-wrapper"></div>
            <div className="comments__container-block-content">
              <div className="comments__container-block-content-head">
                <h5 className="comments__container-block-content-head-name">Theodore Duncan</h5>
                <span className="comments__container-block-content-head-timestamp">11/15/2018</span>
              </div>
              <div className="comments__container-block-content-para">
                How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
