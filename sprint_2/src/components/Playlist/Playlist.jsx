import React from 'react';
import './Playlist.scss';

function Playlist({currentVideoID, playlistArray}) {
  // This component requires a 'currentVideoID' & 'playlistArray'
  // currentVideoID --> to be used to filter against the playlist, to not to be displayed.
  // playlistArray --> for generating the next videos in the list.
  return (
    <section className="playlist">
      <h4 className="playlist__title">Next video</h4>
      <ul className="playlist__list">

        {playlistArray
          // filtering out the videos that do not match the current video
          .filter(videoItem => videoItem.id !== currentVideoID)
          // mapping over the array of resulting video items to make the list.
          .map((videoItem) => {
            return (
              <li className="playlist__list-item" key={videoItem.id}>
                <a className="playlist__list-item-link" href="/#">
                  {/* Will include proper links in future sprint. */}
                  <div 
                    className="playlist__list-item-link-thumb"
                    style={{backgroundImage: `url(${videoItem.image})`}}
                  >
                  </div>
                  <div className="playlist__list-item-link-info">
                    <h4 className="playlist__list-item-link-info-title">{videoItem.title}</h4>
                    <p className="playlist__list-item-link-info-user">{videoItem.channel}</p>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Playlist