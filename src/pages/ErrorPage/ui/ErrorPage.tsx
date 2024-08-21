import React from "react";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("Error 404")}</h1>
      <h2>{t("Page not found")}</h2>
    </div>
  );
};

export { ErrorPage };
