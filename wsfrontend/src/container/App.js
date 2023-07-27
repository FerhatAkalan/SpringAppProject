import React from "react";
import LoginPage from "../pages/LoginPage";
import LanguageSelector from "../components/LanguageSelector";
import ApiProgress from "../shared/ApiProgress";
import UserSignupPage from "../pages/UserSignupPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import Footer from "./Footer";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import TopBar from "./TopBar";
import { connect } from "react-redux";
//import { Authentication } from "../shared/AuthenticationContext";



class App extends React.Component {
  //static contextType = Authentication;
  render() {
    const {isLoggedIn} = this.props;
    
    //onst { isLoggedIn, username } = this.state;
    return (
      <div>
        <Router>
          <TopBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {!isLoggedIn && (
              <Route
                path="/login"
                component={LoginPage}
              />
            )}
            <Route path="/signup" component={UserSignupPage} />
            <Route
              path="/user/:username"
              component={UserPage}
            />
            <Redirect to="/" />
          </Switch>
          <div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.isLoggedIn,
  };
};


export default connect(mapStateToProps)(App);
