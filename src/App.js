import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import Owners from './containers/Owners'
import Owner from './containers/Owner'


function App() {

  return (
    <Router>
    <Navigation />
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/owners" component={Owners} />
        <Route path="/owners/:id" component={Owner} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
