// UI Components
export { Button, buttonVariants } from "./components/ui/button";

// Font Size Context
export {
  FontSizeProvider,
  StorybookFontSizeProvider,
  useFontSize,
} from "./lib/font-size-context";

// Utilities
export { cn } from "./lib/utils";

// Types
export type { VariantProps } from "class-variance-authority";

/*
 * CSS 사용 방법:
 *
 * 1. 프로젝트 루트 CSS 파일에 아래 코드 추가:
 * @import "@kwaneung/design-system/styles";
 *
 * 2. 또는 JavaScript/TypeScript 파일에서:
 * import "@kwaneung/design-system/styles";
 */
