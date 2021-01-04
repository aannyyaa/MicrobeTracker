import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import MicrobeMap from './MicrobeMap';
import MicrobeGraph from './MicrobeGraph';
import MicrobeAreaChart from './MicrobeAreaChart';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="headerNavContainer">
          <header className="App-header">
            <Link to="/">
              <h1>MicrobeTrackerJS</h1>
            </Link>
          </header>
          <nav>
            <Menu />
          </nav>
        </div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MicrobeMap} />
        <Route exact path="/graph-location" component={MicrobeGraph} />
        <Route exact path="/graph-area" component={MicrobeAreaChart} />
        <footer>
          <div id="footerInfo">
            <div className="footerInfoDiv">About</div>
            <div className="footerInfoDiv">Contact</div>
            <div className="footerInfoDiv">Team</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
