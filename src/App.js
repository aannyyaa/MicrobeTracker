import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
            <h1>MicrobeTrackerJS</h1>
          </header>
          <nav>
            <Menu />
          </nav>
        </div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MicrobeMap} />
        <Route exact path="/graph-location" component={MicrobeGraph} />
        <Route exact path="/graph-area" component={MicrobeAreaChart} />
      </div>
    </Router>
  );
}

export default App;
