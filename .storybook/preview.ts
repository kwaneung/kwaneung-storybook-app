import type { Preview } from "@storybook/nextjs";
import { withThemeByClassName } from "@storybook/addon-themes";
import { ThemeProvider } from "next-themes";
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
  decorators: [
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
