import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { GlobalSearch } from "../common/components/global-search/GlobalSearch";

const meta = {
  title: "Example/GlobalSearch",
  component: GlobalSearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onSubmit: fn() },
} satisfies Meta<typeof GlobalSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Extended: Story = {
  args: {
    extended: true,
  },
};
