import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SentScreen from "./SentScreen";
import Login from "./Login";
import { StateContext, useStateValue } from "./context/StateProvider";

function App() {

  const [{user},dispatch]=useStateValue(StateContext);
  console.log(user);
  return (
    <div>
      <Router>
          {!user? <Login/>:
        <Switch>
          <Route exact path="/">
            <HomeScreen></HomeScreen>
          </Route>

          <Route exact path="/sent">
            <SentScreen></SentScreen>
          </Route>
        </Switch>
}
      </Router>
    </div>
  );
}

export default App;
