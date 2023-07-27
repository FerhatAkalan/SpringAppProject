import React from "react";
import { signup } from "../api/apiCalls";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";
import ButtonWithProgress from "./ButtonWithProgress";
import { withApiProgress } from "../shared/ApiProgress";
import background from "../assets/45050925.jpg";

class UserSignupPage extends React.Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    errors: {},
  };

  onChange = (event) => {
    const { t } = this.props;
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;
    if (name === "password" || name === "passwordRepeat") {
      if (name === "password" && value !== this.state.passwordRepeat) {
        errors.passwordRepeat = t("Password mismatch");
      } else if (name === "passwordRepeat" && value !== this.state.password) {
        errors.passwordRepeat = t("Password mismatch");
      } else {
        errors.passwordRepeat = undefined;
      }
    }
    this.setState({
      [name]: value,
      errors,
    });
  };

  onClickSignup = async (event) => {
    event.preventDefault();
    const { username, displayName, password } = this.state;
    const body = {
      username,
      displayName,
      password,
    };

    this.setState({ pendingApiCall: true });
    try {
      const response = await signup(body);
    } catch (error) {
      if (error.response.data.validationErrors) {
        this.setState({ errors: error.response.data.validationErrors });
      }
    }
  };

  render() {
    const { errors } = this.state;
    const { username, displayName, password, passwordRepeat } = errors;
    const { t, pendingApiCall } = this.props;
    return (
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        backgroundPosition: "center center",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "rgba(192, 192, 192, 1)",
      }}>
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
            <h1 className="text-center mt-3">{t("Sign Up")}</h1>
            <Input
              name="username"
              label={t("Username")}
              error={username}
              onChange={this.onChange}
            />
            <Input
              name="displayName"
              label={t("Display Name")}
              error={displayName}
              onChange={this.onChange}
            />
            <Input
              name="password"
              label={t("Password")}
              type="password"
              error={password}
              onChange={this.onChange}
            />
            <Input
              name="passwordRepeat"
              label={t("Password Repeat")}
              type="password"
              error={passwordRepeat}
              onChange={this.onChange}
            />
            <div className="text-center mt-3">
              <ButtonWithProgress
                onClick={this.onClickSignup}
                disabled={pendingApiCall || passwordRepeat !== undefined}
                pendingApiCall={pendingApiCall}
                text={t("Sign Up")}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const UserSignupPageWithApiProgress = withApiProgress(
  UserSignupPage,
  "/api/1.0/users"
);

const UserSignupPageWithTranslation = withTranslation()(
  UserSignupPageWithApiProgress
);

export default UserSignupPageWithTranslation;
