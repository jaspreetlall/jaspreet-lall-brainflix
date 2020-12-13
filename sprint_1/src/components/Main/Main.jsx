import React from 'react';
import Player from '../Player/Player';
import Description from '../Description/Description';
import Comments from '../Comments/Comments';
import Playlist from '../Playlist/Playlist';
import './Main.scss';

export default function Main() {
  return (
    <div className="main">
      <Player />
      <div className="main__container container">
        <article className="main__container--body">
          <Description />
          <Comments />
        </article>
        <section className="main__container--aside">
          <Playlist />
        </section>
      </div>
    </div>
  )
}