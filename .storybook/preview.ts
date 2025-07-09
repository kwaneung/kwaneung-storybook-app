import type { Preview } from "@storybook/nextjs";
import { withThemeByClassName } from "@storybook/addon-themes";
import { ThemeProvider } from "next-themes";
import { StorybookFontSizeProvider } from "../lib/font-size-context";
import React from "react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // 테마 시스템을 사용하므로 배경 addon 비활성화
    },
  },
  globalTypes: {
    fontSize: {
      description: "Global font size for components",
      defaultValue: "normal",
      toolbar: {
        title: "Font Size",
        icon: "type",
        items: [
          { value: "normal", title: "Normal" },
          { value: "large", title: "Large" },
          { value: "extra-large", title: "Extra Large" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    // 폰트 크기 데코레이터 (테마보다 먼저 적용)
    (Story, context) => {
      const fontSize = context.globals.fontSize || "normal";

      React.useEffect(() => {
        // HTML 요소에 data-font-size 속성 설정
        document.documentElement.setAttribute("data-font-size", fontSize);
      }, [fontSize]);

      return React.createElement(StorybookFontSizeProvider, {
        fontSize: fontSize,
        children: React.createElement(Story),
      });
    },
    // next-themes ThemeProvider 데코레이터
    (Story, context) => {
      return React.createElement(
        ThemeProvider,
        {
          attribute: "class",
          defaultTheme: "light",
          enableSystem: false,
          forcedTheme: context.globals.theme,
          disableTransitionOnChange: true,
        },
        React.createElement(Story)
      );
    },
    // 테마 클래스 전환 데코레이터
    withThemeByClassName({
      themes: {
        Light: "light",
        Dark: "dark",
      },
      defaultTheme: "Light",
    }),
  ],
};

export default preview;
