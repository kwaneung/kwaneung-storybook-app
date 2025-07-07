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

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("normal");

  useEffect(() => {
    // 로컬 스토리지에서 폰트 크기 설정 불러오기
    const savedFontSize = localStorage.getItem("font-size") as FontSize;
    if (
      savedFontSize &&
      ["normal", "large", "extra-large"].includes(savedFontSize)
    ) {
      setFontSize(savedFontSize);
    }
  }, []);

  useEffect(() => {
    // 폰트 크기 설정을 로컬 스토리지에 저장
    localStorage.setItem("font-size", fontSize);

    // HTML 요소에 data-font-size 속성 설정
    document.documentElement.setAttribute("data-font-size", fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}
