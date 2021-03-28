import { useEffect } from 'react';
import './App.css';
import FindGame from './components/FindGame/FindGame';
import GameScreen1 from './components/GameScreen1/GameScreen1';
import GameScreen3 from './components/GameScreen3/GameScreen3';
import GameScreen2 from './components/GameScreen2/GameScreen2';
import GameScreen4 from './components/GameScreen4/GameScreen4';
import LandingPage from './components/LandingPage/LandingPage';
import LaterRegister from './components/Later Register/LaterRegister';
import Login from './components/Login/Login';
import MainMenu from './components/MainMenu/MainMenu';
import Register from './components/Register/Register';
import userService from './services/userService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/main">
            <MainMenu />
          </Route>
          <Route exact path="/find">
            <FindGame />
          </Route>
          <Route exact path="/gs1">
            <GameScreen1 />
          </Route>
          <Route exact path="/gs2">
            <GameScreen2 />
          </Route>
          <Route exact path="/gs3">
            <GameScreen3 />
          </Route>
          <Route exact path="/gs4">
            <GameScreen4 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
