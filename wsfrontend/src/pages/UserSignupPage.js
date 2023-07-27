import React, { useState } from "react";
import { signup } from "../api/apiCalls";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import ButtonWithProgress from "./ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import background from "../assets/45050925.jpg";
import { useDispatch } from "react-redux";
import { signupHandler } from "../redux/authActions";

const UserSignupPage = (props) => {
  const [form, setForm] = useState({
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const onChange = (event) => {
    const { name, value } = event.target;
    const errorsCopy = { ...errors };
    errorsCopy[name] = undefined;
    setErrors(errorsCopy);
    const formCopy = { ...form };
    formCopy[name] = value;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };

  const onClickSignup = async (event) => {
    event.preventDefault();
    const { history } = props;
    const { push } = history;
    const { username, displayName, password } = form;
    const body = {
      username,
      displayName,
      password,
    };

    try {
      const response = await dispatch(signupHandler(body));
      push("/");
    } catch (error) {
      if (error.response.data.validationErrors) {
        setErrors(error.response.data.validationErrors);
      }
    }
  };
  const { t } = useTranslation();

  const {
    username: usernameError,
    displayName: displayNameError,
    password: passwordError,
  } = errors;
  const pendingApiCallSignup = useApiProgress("/api/1.0/users");
  const pendingApiCallLogin = useApiProgress("/api/1.0/auth");
  const pendingApiCall = pendingApiCallSignup || pendingApiCallLogin;
  let passwordRepeatError;
  if (form.password !== form.passwordRepeat) {
    passwordRepeatError = t("Password mismatch");
  }
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
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
          <h1 className="text-center mt-3">{t("Sign Up")}</h1>
          <Input
            name="username"
            label={t("Username")}
            error={usernameError}
            onChange={onChange}
          />
          <Input
            name="displayName"
            label={t("Display Name")}
            error={displayNameError}
            onChange={onChange}
          />
          <Input
            name="password"
            label={t("Password")}
            type="password"
            error={passwordError}
            onChange={onChange}
          />
          <Input
            name="passwordRepeat"
            label={t("Password Repeat")}
            type="password"
            error={passwordRepeatError}
            onChange={onChange}
          />
          <div className="text-center mt-3">
            <ButtonWithProgress
              onClick={onClickSignup}
              disabled={pendingApiCall || passwordRepeatError !== undefined}
              pendingApiCall={pendingApiCall}
              text={t("Sign Up")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};


export default UserSignupPage;
