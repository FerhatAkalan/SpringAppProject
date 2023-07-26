import React from "react";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSignupPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import TopBar from "./TopBar";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    username: undefined,
  };

  onLoginSuccess = (username) => {
    this.setState({
      username,
      isLoggedIn: true,
    });
  };

  onLogoutSuccess = () => {
    this.setState({
      isLoggedIn: false,
      username: undefined,
    });
  };

  render() {
    const { isLoggedIn, username } = this.state;
    return (
      <div>
        <Router>
          <TopBar
            isLoggedIn={isLoggedIn}
            username={username}
            onLogoutSuccess={this.onLogoutSuccess}
          />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {!isLoggedIn && (
              <Route
                path="/login"
                component={(props) => {
                  return (
                    <LoginPage
                      {...props}
                      onLoginSuccess={this.onLoginSuccess}
                    />
                  );
                }}
              />
            )}

            <Route path="/signup" component={UserSignupPage} />
            <Route path="/user/:username" component={UserPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
