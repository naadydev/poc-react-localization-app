import React from "react";
import { useTranslation } from "react-i18next";

function Language() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>NADY Language Test</h1>
      <h2>{t("description.part1")}</h2>
      <h2>{t("title")}</h2>
      <button onClick={() => changeLanguage("de")}>---DE---</button> <br /><br />
      <button onClick={() => changeLanguage("en")}>---EN---</button><br /><br />
      <button onClick={() => changeLanguage("fr")}>---FR---</button><br /><br />
    </div>
  );
}

export default Language;
