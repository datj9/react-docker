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
        <Link to="/new">New Page</Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" render={() => <div>Test</div>} />
        <Route
          exact
          path="/new"
          render={() => (
            <div>
              <Link to="/">HomePage</Link>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
