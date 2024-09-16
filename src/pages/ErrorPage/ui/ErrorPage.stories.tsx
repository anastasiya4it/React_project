import type { Meta, StoryObj } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";

const meta: Meta<typeof ErrorPage> = {
  title: "page/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  args: {},
};
