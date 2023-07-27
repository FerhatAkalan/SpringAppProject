import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { useTranslation } from "react-i18next";
import ButtonWithProgress from "./ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import background from "../assets/background1.jpg";
import user from "../assets/vector.png";
import { useDispatch } from "react-redux";
import { loginHandler } from "../redux/authActions";

const LoginPage = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setError(undefined);
  }, [username, password]);

  const onClickLogin = async (event) => {
    event.preventDefault();

    const creds = {
      username,
      password,
    };
    const { history } = props;
    const { push } = history;
    setError(undefined);

    try {
      await dispatch(loginHandler(creds));
      push("/");
    } catch (apiError) {
      setError(apiError.response.data.message);
    }
  };
  const { t } = useTranslation();
  const  pendingApiCall = useApiProgress('/api/1.0/auth');
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
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Input
            label={t("Password")}
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
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
              onClick={onClickLogin}
              disabled={!buttonEnabled || pendingApiCall}
              pendingApiCall={pendingApiCall}
              text={t("Login")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
