import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import SurveyPage from "./pages/Survey";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  // const user ={'Name' : 'Gihan'};
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login /> 
          {/* use login as the first page */}
        </Route>
        <Route exact path="/homepage">
          <Home /> 
          {/* added for homepage */}
        </Route>
        <Route exact path="/survey">
          <SurveyPage /> 
          {/* added for survey page */}
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {/* <Route path="/login">{user ?  <Login /> : <Redirect to="/" />}</Route> */}
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>  
      </Switch>
    </Router>
  );
};

export default App;
