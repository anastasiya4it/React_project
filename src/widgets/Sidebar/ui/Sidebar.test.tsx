import { fireEvent, screen } from "@testing-library/react";
import { i18nUsingInTest } from "shared/lib/test/i18nUsingInTest";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar";

describe("Sidebar test", () => {
  test("Sidebar render", () => {
    i18nUsingInTest(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Sidebar toggle test", () => {
    i18nUsingInTest(<Sidebar />);
    const btnToggle = screen.getByTestId("toggle");
    expect(screen.getByTestId("toggle")).toBeInTheDocument();
    fireEvent.click(btnToggle);
    expect(screen.getByTestId("sidebar")).toHaveClass("isOpen");
    expect(screen.getByTestId("menu-footer")).toHaveClass("toggleNoOpen");
  });
});
