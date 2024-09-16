// import "app/styles/index.scss";
import type { StoryContext, StoryFn } from "@storybook/react";
import { Theme, ThemeContext } from "app/provider/ThemeProvider";
import React from "react";

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  // const selectedTheme = React.useContext(context.globals.theme || Theme.Light);
  const { theme = context.globals.theme || Theme.Light, setTheme } =
    React.useContext(ThemeContext);
  // (context.globals.theme ||
  //   Theme.Light) as keyof typeof Theme;
  // const theme = Theme[selectedTheme];

  return (
    <div className={`app ${theme}`}>
      <Story className={`${theme}`} />
    </div>
  );
};
