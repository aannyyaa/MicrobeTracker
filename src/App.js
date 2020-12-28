import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import MicrobeMap from './MicrobeMap';
import MicrobeGraph from './MicrobeGraph';
import MicrobeAreaChart from './MicrobeAreaChart'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>MicrobeTrackerJS</h1>
        </header>
        <nav>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="map">
            <h2>Map</h2>
          </Link>
          <Link to="graph-location">
            <h2>Graph by Location</h2>
          </Link>
          <Link to="graph-area">
            <h2>Graph for an Area</h2>
          </Link>
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MicrobeMap} />
        <Route exact path="/graph-location" component={MicrobeGraph} />
        <Route exact path="/graph-area" component={MicrobeAreaChart} />
      </div>
    </Router>
  );
}

export default App;
