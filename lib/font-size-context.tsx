"use client";

import { createContext, useContext, useEffect, useState } from "react";

type FontSize = "normal" | "large" | "extra-large";

interface FontSizeContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined
);

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
}

interface FontSizeProviderProps {
  children: React.ReactNode;
  initialFontSize?: FontSize;
  isStorybook?: boolean;
}

export function FontSizeProvider({
  children,
  initialFontSize = "normal",
  isStorybook = false,
}: FontSizeProviderProps) {
  const [fontSize, setFontSize] = useState<FontSize>(initialFontSize);

  useEffect(() => {
    // 스토리북이 아닐 때만 로컬 스토리지에서 폰트 크기 설정 불러오기
    if (!isStorybook) {
      const savedFontSize = localStorage.getItem("font-size") as FontSize;
      if (
        savedFontSize &&
        ["normal", "large", "extra-large"].includes(savedFontSize)
      ) {
        setFontSize(savedFontSize);
      }
    }
  }, [isStorybook]);

  useEffect(() => {
    // 스토리북이 아닐 때만 로컬 스토리지에 저장
    if (!isStorybook) {
      localStorage.setItem("font-size", fontSize);
    }

    // HTML 요소에 data-font-size 속성 설정
    document.documentElement.setAttribute("data-font-size", fontSize);
  }, [fontSize, isStorybook]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

// 스토리북 전용 Provider
export function StorybookFontSizeProvider({
  children,
  fontSize: externalFontSize = "normal",
}: {
  children: React.ReactNode;
  fontSize?: FontSize;
}) {
  const [fontSize, setFontSize] = useState<FontSize>(externalFontSize);

  // 외부에서 전달된 fontSize가 변경될 때 내부 상태 업데이트
  useEffect(() => {
    setFontSize(externalFontSize);
  }, [externalFontSize]);

  useEffect(() => {
    // HTML 요소에 data-font-size 속성 설정
    document.documentElement.setAttribute("data-font-size", fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}
