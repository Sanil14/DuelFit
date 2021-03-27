import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import LaterRegister from './components/Later Register/LaterRegister';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
        <Register />
        <Login />
        <LaterRegister />
      </header>
    </div>
  );
}

export default App;
