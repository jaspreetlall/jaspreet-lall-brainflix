import React from 'react';
import './Comments.scss';

function Comments({commentsArray}) {
  return (
    <div className="comments">
      {commentsArray.map((comment) => {
        return (
          <div className="comments__block" key={comment.id}>
            <div className="comments__block-wrapper"></div>
            <div className="comments__block-content">
              <div className="comments__block-content-head">
                <h5 className="comments__block-content-head-name">{comment.name}</h5>
                <span className="comments__block-content-head-timestamp">{(new Date(comment.timestamp)).toLocaleDateString('en-US')}</span>
              </div>
              <div className="comments__block-content-para">{comment.comment}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments