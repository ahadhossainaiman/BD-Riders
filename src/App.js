import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import Location from './component/Location/Location';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
   <>
   <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
   <Router>
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/location/:title">
              <Location></Location>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
   </>
  );
}

export default App;
