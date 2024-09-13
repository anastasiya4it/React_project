import { classNames } from "shared/lib/className/className";
import cls from "./LanguageSelection.module.scss";
import Language from "shared/assets/icons/language.svg";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface LanguageSelectionProps {
  className?: string;
}

const LanguageSelection = ({ className }: LanguageSelectionProps) => {
  const value = [
    { value: "en", label: "English" },
    { value: "ua", label: "Украінська" },
    { value: "ru", label: "русский" },
  ];
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(value[0].value);
  const [isOpen, setIsOpen] = useState(false);

  const openMenuLang = () => {
    setIsOpen((prev) => !prev);
  };
  const changeLanguage = async (value: string) => {
    i18n.changeLanguage(value);
    setLang(value);
    openMenuLang();
  };
  return (
    <div className={classNames(cls.main, {}, [className ?? ""])}>
      <Button
        onClick={openMenuLang}
        className={classNames(cls.btn, {}, [className ?? ""])}
      >
        <Language className={cls.icon} />
      </Button>
      <ul className={classNames(cls.ul, { [cls.active]: isOpen }, [])}>
        {value.map((item) => (
          <button
            role="button"
            type="button"
            tabIndex={0}
            key={item.value}
            onClick={() => {
              changeLanguage(item.value);
            }}
            className={cls.li}
          >
            {item.label}
          </button>
        ))}
      </ul>
    </div>
  );
};

export { LanguageSelection };
