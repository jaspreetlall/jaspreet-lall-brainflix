import React from 'react';
import './Comments.scss';

function Comments({commentsArray}) {
  // -> commentsArray = Array of comment objects

  if (!commentsArray) {
    return (
      <p>Loading comments...</p>
    )
  } else {
    // let numberOfComments = commentsArray.length;
    return (
      <div className="comments">
        {/* mapping comments
          -> using .slice to copy the array
          -> using .reverse the copied array so that new comments are on the top
          -> using .map to map the resulting array
        */}
        {commentsArray.slice().reverse().map((comment) => {
          return (
            <div className="comments__block" key={comment.id}>
              <div className="comments__block-wrapper"></div>
              <div className="comments__block-content">
                <div className="comments__block-content-head">
                  <h5 className="comments__block-content-head-name">{comment.name}</h5>
                  {/* converting the timestamp to human readable date */}
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
}

export default Comments