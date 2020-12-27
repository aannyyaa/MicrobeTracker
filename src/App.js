import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import MicrobeMap from './MicrobeMap';

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
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MicrobeMap} />
      </div>
    </Router>
  );
}

export default App;
