import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme, ThemeContext } from "app/provider/ThemeProvider";
import { withReactContext } from "storybook-react-context";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import React from "react";

// const FirstContext = React.createContext([{ theme: Theme.light }, () => {}]);
// const SecondContext = React.createContext([{ theme: Theme.dark }]);

// Define the reducer function
// const reducer = (state: { theme: Theme }, action: { type: string }) => {
//   switch (action.type) {
//     case "toggleTheme":
//       return {
//         ...state,
//         theme: state.theme === Theme.light ? Theme.dark : Theme.light,
//       };
//     default:
//       return state;
//   }
// };
const reducer = (state: { theme: Theme }, action: { type: string }) => ({
  ...state,
  ...action,
});

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  decorators: [ThemeDecorator, withReactContext],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;
// const DarkContext = React.createContext({ theme: Theme.dark });
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonDark: Story = {
  args: {},
  globals: {
    theme: Theme.dark,
  },
};
export const ButtonLight: Story = {
  args: {},
  globals: {
    theme: Theme.light,
  },
};
