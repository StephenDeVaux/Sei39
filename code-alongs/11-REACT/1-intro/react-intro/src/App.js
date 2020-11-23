import logo from './logo.svg';
import './App.css';
import Copyright from './Copyright'
import Hello from './Hello'
import LikeButton from './LikeButton'
// import Slider from './Slider'

//the word class has a special meanning so now they use className

function App() {
  return (
    <div className="App">
      <Copyright year="2024"/>
      <Hello name="Bobby" surname="patterson"/>
      <Hello name="Sue"/>
      <LikeButton /> 
      <LikeButton /> 
    </div>
  );
}

export default App;
