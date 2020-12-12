import Header from './components/Header/Header';
import Player from './components/Player/Player';
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';

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
        <section>Aside - Next Video</section>
      </div>
    </div>
  );
}
export default App;
