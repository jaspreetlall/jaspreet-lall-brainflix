import React from 'react';
import './CommentsSection.scss';
import UserPhoto from '../../assets/images/Mohan-muruge.jpg';
import Comments from '../Comments/Comments';

export default function CommentsSection({videoID, commentsArray}) {
  // Video ID to be used in future sprint. Logging here to avoid 'not used' in console.
  console.log("Video ID to connect the form to the API to post comments " + videoID);
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

      <section>
        <Comments commentsArray={commentsArray}/>
      </section>
    </div>
  )
}