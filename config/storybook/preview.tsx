import type { Preview, StoryFn } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { withReactContext } from "storybook-react-context";
import React from "react";
import { Theme, ThemeContext } from "../../src/app/provider/ThemeProvider";
// Define ExampleContext
// const DarkContext = React.createContext({ theme: Theme.Dark });
// const LightContext = React.createContext({ theme: Theme.Light });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactContext: {
      contexts: [
        {
          context: ThemeContext,
          contextValue: Theme.Dark,
        },
        {
          context: ThemeContext,
          contextValue: Theme.Light,
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        // icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [Theme.Light, Theme.Dark],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: Theme.Dark,
  },
  decorators: [
    ThemeDecorator,
    StyleDecorator,
    RouterDecorator,
    withReactContext,
  ],
};

export default preview;
