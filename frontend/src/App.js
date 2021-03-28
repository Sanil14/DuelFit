import './App.css';
import FindGame from './components/FindGame/FindGame';
import GameScreen1 from './components/GameScreen1/GameScreen1';
import GameScreen3 from './components/GameScreen3/GameScreen3';
import GameScreen4 from './components/GameScreen4/GameScreen4';
import LandingPage from './components/LandingPage/LandingPage';
import LaterRegister from './components/Later Register/LaterRegister';
import Login from './components/Login/Login';
import MainMenu from './components/MainMenu/MainMenu';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LandingPage />
        <Register />
        <Login />
        <LaterRegister /> */}
        {/* <MainMenu /> */}
        <FindGame />
        <GameScreen1 />
        <GameScreen3 />
        <GameScreen4 />
      </header>
    </div>
  );
}

export default App;
