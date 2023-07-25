import React from "react";
import { withTranslation } from "react-i18next";
import { changeLanguage } from "../api/apiCalls";

const LanguageSelector = (props) => {
  const onChangeLanguage = (language) => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };
  return (
    <div className="container">
      <div className="d-flex flex-row-reverse">
        <img
          src="https://flagsapi.com/US/flat/48.png"
          alt="USA Flag"
          onClick={() => onChangeLanguage("en")}
          style={{ cursor: "pointer" }}
        />
        <img
          src="https://flagsapi.com/TR/flat/48.png"
          alt="Turkish Flag"
          onClick={() => onChangeLanguage("tr")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default withTranslation()(LanguageSelector);
