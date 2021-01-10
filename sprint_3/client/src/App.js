import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Upload from './components/Upload/Upload';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route
              path="/upload"
              exact
              component={Upload}
            />
            <Route path="/video/:id" component={Main}/>
          </Switch>
        </>
      </Router>
    </div>
  );
}
export default App;