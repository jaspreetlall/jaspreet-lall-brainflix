// import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Upload from './components/Upload/Upload';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/upload" component={Upload}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;