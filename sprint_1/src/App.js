import Header from './components/Header/Header';
import Player from './components/Player/Player';
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';
import NextVideo from './components/NextVideo/NextVideo';

function App() {
  return (
    <div>
      <Header />
      <Player />
      <div className="container">
        <article>
          <Description />
          <Comments />
        </article>
        <NextVideo />
      </div>
    </div>
  );
}
export default App;
