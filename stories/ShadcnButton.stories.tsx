import type { Meta, StoryObj } from "@storybook/react";
import { ChevronRightIcon, GitBranchIcon, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    asChild: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// 모든 variants
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

// 사이즈 variants
export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "secondary",
    size: "icon",
    children: <ChevronRightIcon />,
  },
};

// 아이콘과 텍스트
export const WithIcon: Story = {
  args: {
    variant: "outline",
    size: "sm",
    children: (
      <>
        <GitBranchIcon />
        New Branch
      </>
    ),
  },
};

// 로딩 상태
export const Loading: Story = {
  args: {
    size: "sm",
    disabled: true,
    children: (
      <>
        <Loader2Icon className="animate-spin" />
        Please wait
      </>
    ),
  },
};

// 비활성화된 버튼
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};
