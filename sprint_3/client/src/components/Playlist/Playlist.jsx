import React from 'react';
import {Link} from 'react-router-dom';
import TextClamp from 'react-string-clamp';

import './Playlist.scss';

function Playlist({currentVideoId, playlistArray}) {
  // This component requires a 'currentVideoID' & 'playlistArray'
  // currentVideoID --> to be used to filter against the playlist, to not to be displayed.
  // playlistArray --> for generating the next videos in the list.

  return (
    <section className="playlist">
      <h4 className="playlist__title">Next video</h4>
      <ul className="playlist__list">

        {playlistArray
          // filtering out the videos that do not match the current video
          .filter(videoItem => videoItem.id !== currentVideoId)
          // mapping over the array of resulting video items to make the list.
          .map((videoItem) => {
            return (
              <li className="playlist__list-item" key={videoItem.id}>
                <Link
                  className="playlist__list-item-link"
                  to={`/video/${videoItem.id}`}>
                  <div 
                    className="playlist__list-item-link-thumb"
                    style={{backgroundImage: `url(${videoItem.image})`}}
                  >
                  </div>
                  <div className="playlist__list-item-link-info">
                    <TextClamp
                      className="playlist__list-item-link-info-title"
                      element="h4"
                      text={videoItem.title}
                      lines="2"
                    />
                    <p className="playlist__list-item-link-info-user">{videoItem.channel}</p>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Playlist