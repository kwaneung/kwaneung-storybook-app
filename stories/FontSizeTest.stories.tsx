import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Type, Sun, Moon } from "lucide-react";

const TestComponent = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* 제목 */}
      <h1 className="text-3xl font-bold text-center">
        폰트 크기 테스트 컴포넌트
      </h1>

      {/* 부제목 */}
      <h2 className="text-2xl font-semibold text-muted-foreground text-center">
        다양한 크기의 텍스트로 폰트 스케일링 효과 확인
      </h2>

      {/* 텍스트 샘플 */}
      <div className="space-y-4">
        <p className="text-lg">
          <strong>큰 텍스트:</strong> 이 텍스트는 text-lg 클래스를 사용하여 큰
          크기로 표시됩니다.
        </p>
        <p className="text-base">
          <strong>기본 텍스트:</strong> 이 텍스트는 text-base 클래스를 사용하여
          기본 크기로 표시됩니다.
        </p>
        <p className="text-sm">
          <strong>작은 텍스트:</strong> 이 텍스트는 text-sm 클래스를 사용하여
          작은 크기로 표시됩니다.
        </p>
      </div>

      {/* 버튼 그룹 */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">버튼 컴포넌트</h3>
        <div className="flex gap-3 flex-wrap">
          <Button variant="default" size="sm">
            <Type className="h-4 w-4 mr-2" />
            작은 버튼
          </Button>
          <Button variant="outline" size="default">
            <Sun className="h-4 w-4 mr-2" />
            기본 버튼
          </Button>
          <Button variant="secondary" size="lg">
            <Moon className="h-4 w-4 mr-2" />큰 버튼
          </Button>
        </div>
      </div>

      {/* 설명 텍스트 */}
      <div className="bg-muted p-4 rounded-lg">
        <h4 className="text-lg font-semibold mb-2">폰트 크기 조절 방법</h4>
        <ul className="text-sm space-y-1">
          <li>
            📝 <strong>보통:</strong> 기본 폰트 크기 (16px 기준)
          </li>
          <li>
            🔤 <strong>큰글씨:</strong> 125% 크기 (20px 기준)
          </li>
          <li>
            🔠 <strong>매우큰글씨:</strong> 150% 크기 (24px 기준)
          </li>
        </ul>
        <p className="text-xs mt-3 text-muted-foreground">
          스토리북 툴바에서 폰트 크기 버튼을 클릭하여 변경할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

const meta = {
  title: "Accessibility/FontSize",
  component: TestComponent,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "폰트 크기 조절 기능을 테스트하기 위한 컴포넌트입니다. 툴바에서 폰트 크기를 변경하여 모든 텍스트가 비례적으로 확대/축소되는지 확인할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "폰트 크기 테스트",
  parameters: {
    docs: {
      description: {
        story:
          "다양한 크기의 텍스트와 버튼이 포함된 컴포넌트입니다. 스토리북 툴바의 폰트 크기 버튼을 사용하여 텍스트 크기를 조절해보세요.",
      },
    },
  },
};

export const NormalSize: Story = {
  name: "보통 크기",
  globals: {
    fontSize: "normal",
  },
};

export const LargeSize: Story = {
  name: "큰 크기",
  globals: {
    fontSize: "large",
  },
};

export const ExtraLargeSize: Story = {
  name: "매우 큰 크기",
  globals: {
    fontSize: "extra-large",
  },
};
