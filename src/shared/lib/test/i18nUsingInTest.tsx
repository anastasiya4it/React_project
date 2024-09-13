import type { ReactNode } from "react";
import { render } from "@testing-library/react";
import i18nForTest from "shared/config/i18n/i18nForTest"; // Убедитесь, что путь к модулю правильный

import { I18nextProvider } from "react-i18next";

export function i18nUsingInTest(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
  );
}
