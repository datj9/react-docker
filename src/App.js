import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hellooo</h1>
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
        </a>
        <Link to="/test">Test</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/test" render={() => <div>Test</div>} />
    </Switch>
  );
}

export default App;
