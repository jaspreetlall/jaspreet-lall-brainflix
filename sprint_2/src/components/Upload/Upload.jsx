import React from 'react';
import { Link } from 'react-router-dom';
import './Upload.scss';
import VideoPreview from '../../assets/images/Upload-video-preview.jpg';

export default function Upload() {
  return (
    <div>

      <section className="upload container">
        <h1 className="upload__head">Upload Video</h1>
        <form className="upload__form">

          <div className="upload__form-detail">

            <div className="upload__form-detail-preview">
              <h4 className="upload__form-detail-preview-title">Video Thumbnail</h4>
              <div className="upload__form-detail-preview-wrapper">
                <img className="upload__form-detail-preview-wrapper-img" src={VideoPreview} alt="Bicycle handle bar in focus"/>
              </div>
            </div>

            <div className="upload__form-detail-input">
              <div className="upload__form-detail-input-block">
                <label className="upload__form-detail-input-block-label" htmlFor="title">Title your video</label>
                <input
                  className="upload__form-detail-input-block-field upload__form-detail-input-block-field--title"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Add a title to your video"
                />
              </div>

              <div className="upload__form-detail-input-block">
                <label className="upload__form-detail-input-block-label" htmlFor="description">Add a video description</label>
                <textarea
                  className="upload__form-detail-input-block-field upload__form-detail-input-block-field--desc"
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Add a description of your video"
                />
              </div>
            </div>

          </div>

          <div className="upload__form-action">
            <button className="upload__form-action-button upload__form-action-button--publish">Publish</button>
            <Link className="upload__form-action-button upload__form-action-button--cancel" to="/">Cancel</Link>
          </div>
        </form>
      </section>
    </div>
  )
}
