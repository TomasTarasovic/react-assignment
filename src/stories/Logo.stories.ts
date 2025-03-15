import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "../common/components/logo/Logo";

const meta = {
  title: "Example/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "small",
  },
};
