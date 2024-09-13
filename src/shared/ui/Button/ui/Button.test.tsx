import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)
import { Button, ButtonTheme } from "shared/ui/Button";

describe("Button test", () => {
  test("Button text and render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  test("Button class render", () => {
    render(<Button theme={ButtonTheme.Primary}>Test</Button>);
    expect(screen.getByRole("button")).toHaveClass("button", "primary");
    // screen.debug();
  });
});
