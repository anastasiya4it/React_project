import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/className/className";
import * as cls from "./ErrorPage.module.scss";
import errorImage from "shared/assets/images/404.png";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.main, {}, [cls.overlay])}>
      <div className={classNames(cls.text)}>
        <h1>{t("404")}</h1>
        <h2>{t("Sorry, we couldn`t find this page")}</h2>
      </div>
      <img src={errorImage} alt="404" className={classNames(cls.img)} />
    </div>
  );
};

export { ErrorPage };
