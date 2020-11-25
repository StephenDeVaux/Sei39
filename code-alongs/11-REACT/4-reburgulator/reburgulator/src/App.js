import logo from './logo.svg';
import './App.css';
import Reburgulator from './Reburgulator';
import playlist from './data'
import {Component} from 'react'

console.log(playlist)

class App extends Component {

  state= {
    playlist: playlist
  }

  render() {

    let {playlist} = this.state

    return (
      <div className="App">
        {/* <Reburgulator /> */}
        <h3>Playlist 1</h3>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {playlist.map(song => {
              return ( 
                <tr>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.time}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
