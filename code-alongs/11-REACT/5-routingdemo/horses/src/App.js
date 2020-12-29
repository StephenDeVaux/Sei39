import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

console.log("whens this happen")

function Home() {
  return (
    <section>
      <h1>Home sweet home</h1>
      <p>welcome to not sure</p>
    </section>
  )
}

function About() {
  return (
    <section>
      <h1>About us</h1>
      <p>Blah blah blah yayyayyddayays</p>
    </section>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <footer>&copy; 2020</footer>
        </div>
      </Router>
    );
  }
}

export default App;
