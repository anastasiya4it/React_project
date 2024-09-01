import { classNames } from "shared/lib/className/className";
import * as cls from "./ErrorBoundarySecondaryScreen.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { useState } from "react";
interface ErrorBoundarySecondaryScreenProps {
  className?: string;
}

const ErrorBoundarySecondaryScreen = ({
  className,
}: ErrorBoundarySecondaryScreenProps) => {
  const { t } = useTranslation();
  const [reload, setReload] = useState(false);
  const onReload = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.main)}>
      <div className={classNames(cls.text)}>{t("Somesing went wrong")}</div>{" "}
      <Button onClick={onReload}>RELOAD PAGE</Button>
    </div>
  );
};

export { ErrorBoundarySecondaryScreen };
