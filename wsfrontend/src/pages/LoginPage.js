import React, { Component } from "react";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";
import ButtonWithProgress from "./ButtonWithProgress";
import { withApiProgress } from "../shared/ApiProgress";
//import { Authentication } from "../shared/AuthenticationContext";
import background from "../assets/background1.jpg";
import styled from "styled-components";
import user from "../assets/vector.png";
import { connect } from "react-redux";
import { loginHandler } from "../redux/authActions";

class LoginPage extends Component {
  //static contextType = Authentication;
  state = {
    username: null,
    password: null,
    error: null,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: null,
    });
  };

  onClickLogin = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    const creds = {
      username,
      password,
    };
    const { history, dispatch } = this.props;
    const { push } = history;

    this.setState({
      error: null,
    });
    try {
      await dispatch(loginHandler(creds));
      push("/");
    } catch (apiError) {
      this.setState({
        error: apiError.response.data.message,
      });
      
    }
  };

  render() {
    const { t, pendingApiCall } = this.props;
    const { username, password, error } = this.state;
    const buttonEnabled = username && password;
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "rgba(192, 192, 192, 1)",
        }}
      >
        <div
          className="container"
          style={{
            display: "block",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "30px",
            borderRadius: "20px",
            width: "500px",
            height: "500px",
          }}
        >
          <form>
            <h1 className="text-center mt-1">{t("LOGIN")}</h1>
            <img
              src={user}
              style={{
                height: "100px",
                width: "100px",
                position: "relative",
                borderRadius: "50px",
                marginLeft: "170px",
              }}
            ></img>
            <Input
              label={t("Username")}
              name="username"
              onChange={this.onChange}
            />
            <Input
              label={t("Password")}
              name="password"
              type="password"
              onChange={this.onChange}
            />
            {error && <div className="alert alert-danger mt-3">{error}</div>}

            <a
              href="https://github.com/FerhatAkalan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              {t("Forget Password?")}
            </a>
            <div className="text-center mt-3">
              <ButtonWithProgress
                onClick={this.onClickLogin}
                disabled={!buttonEnabled || pendingApiCall}
                pendingApiCall={pendingApiCall}
                text={t("Login")}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const LoginPageWithTranslation = withTranslation()(LoginPage);
export default connect()(
  withApiProgress(LoginPageWithTranslation, "/api/1.0/auth")
);
