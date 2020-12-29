import logo from './logo.svg';
import './App.css';
import Reburgulator from './Reburgulator';
import playlist from './data'
import {Component} from 'react'

console.log(playlist)

class App extends Component {


  render() {

   

    return (
      <div className="App">
        <Reburgulator />
      </div>
    );
  }
}

export default App;
