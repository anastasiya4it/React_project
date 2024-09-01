import React from "react";
import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("Головна")}</h1>
      <h4>{t("Вітаю, друже")}</h4>
    </div>
  );
}

export { MainPage };
