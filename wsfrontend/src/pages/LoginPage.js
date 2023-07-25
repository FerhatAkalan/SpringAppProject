import React, { Component } from "react";
import Input from "../components/Input";
import { withTranslation } from "react-i18next";
class LoginPage extends Component {
  state = {
    username: null,
    password: null,
    pendingApiCall: false,
    errors: {},
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {t} = this.props;
    return (
      <div className="container">
        <form>
          <h1 className="text-center mt-3">{t('Login')}</h1>
          <Input label={t("Username")} name="username" onChange={this.onChange} />
          <Input
            label={t("Password")}
            name="password"
            type="password"
            onChange={this.onChange}
          />
          <div className="text-center mt-3">
            <button className="btn btn-success">
            {t('Login')}
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withTranslation()(LoginPage);
