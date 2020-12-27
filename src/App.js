import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import MicrobeMap from './MicrobeMap';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>MicrobeTrackerJS</div>
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="map">Map</Link>
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MicrobeMap} />
      </div>
    </Router>
  );
}

export default App;
