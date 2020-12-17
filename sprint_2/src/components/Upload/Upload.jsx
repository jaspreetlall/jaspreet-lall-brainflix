import React from 'react';
import { Link} from 'react-router-dom';
import VideoPreview from '../../assets/images/Upload-video-preview.jpg';

import Header from '../Header/Header';

export default function Upload() {
  return (
    <div>
      <Header />

      <h1>Upload Video</h1>
      <form>

        <div>

          <div>
            <h4>Video Thumbnail</h4>
            <div>
              <img src={VideoPreview} alt="Bicycle handle bar in focus"/>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="title">Title your video</label>
              <input
                className=""
                type="text"
                id="title"
                name="title"
              />
            </div>

            <div>
              <label htmlFor="description">Add a video description</label>
              <input
                className=""
                type="text"
                id="description"
                name="description"
              />
            </div>
          </div>

        </div>

        <div>
          <button>Publish</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  )
}
