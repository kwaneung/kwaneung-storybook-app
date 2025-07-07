"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useFontSize } from "@/lib/font-size-context";
import {
  Sun,
  Moon,
  Monitor,
  Palette,
  Zap,
  Heart,
  Settings,
  ChevronRightIcon,
  GitBranchIcon,
  Loader2Icon,
  Type,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function TestButtonsPage() {
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const [mounted, setMounted] = useState(false);

  // 하이드레이션 이슈 방지
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const variants = [
    { name: "default", label: "Default" },
    { name: "destructive", label: "Destructive" },
    { name: "outline", label: "Outline" },
    { name: "secondary", label: "Secondary" },
    { name: "ghost", label: "Ghost" },
    { name: "link", label: "Link" },
  ] as const;

  const sizes = [
    { name: "sm", label: "Small" },
    { name: "default", label: "Default" },
    { name: "lg", label: "Large" },
    { name: "icon", label: "Icon" },
  ] as const;

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Button 테스트</h1>
            <div className="text-muted-foreground space-y-1">
              <p>
                현재 테마: <span className="font-semibold">{theme}</span>
              </p>
              <p>
                폰트 크기: <span className="font-semibold">{fontSize}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {/* 테마 토글 버튼 */}
            <div className="flex gap-1">
              <Button
                onClick={() => setTheme("light")}
                variant={theme === "light" ? "default" : "outline"}
                size="sm"
                className="gap-2"
              >
                <Sun className="h-4 w-4" />
                Light
              </Button>
              <Button
                onClick={() => setTheme("dark")}
                variant={theme === "dark" ? "default" : "outline"}
                size="sm"
                className="gap-2"
              >
                <Moon className="h-4 w-4" />
                Dark
              </Button>
              <Button
                onClick={() => setTheme("system")}
                variant={theme === "system" ? "default" : "outline"}
                size="sm"
                className="gap-2"
              >
                <Monitor className="h-4 w-4" />
                System
              </Button>
            </div>

            {/* 폰트 크기 토글 버튼 */}
            <div className="flex gap-1 ml-2">
              <Button
                onClick={() => setFontSize("normal")}
                variant={fontSize === "normal" ? "default" : "outline"}
                size="sm"
                className="gap-2"
              >
                <Type className="h-4 w-4" />
                보통
              </Button>
              <Button
                onClick={() => setFontSize("large")}
                variant={fontSize === "large" ? "default" : "outline"}
                size="sm"
                className="gap-2"
              >
                <Type className="h-4 w-4" />
                큰글씨
              </Button>
              <Button
                onClick={() => setFontSize("extra-large")}
                variant={fontSize === "extra-large" ? "default" : "outline"}
                size="sm"
                className="gap-2"
              >
                <Type className="h-4 w-4" />
                매우큰글씨
              </Button>
            </div>
          </div>
        </div>

        {/* Variant 테스트 */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Variants</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {variants.map((variant) => (
                <div key={variant.name} className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {variant.label}
                  </h3>
                  <Button variant={variant.name as any} className="w-full">
                    {variant.label} 버튼
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Size 테스트 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sizes.map((size) => (
                <div key={size.name} className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {size.label}
                  </h3>
                  {size.name === "icon" ? (
                    <Button size={size.name as any} variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button size={size.name as any} className="w-full">
                      {size.label} 버튼
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 특별한 아이콘 버튼들 (sample 페이지에서 가져온 것들) */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              특별한 아이콘 버튼들
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  작은 아이콘 버튼
                </h3>
                <Button variant="secondary" size="icon" className="size-8">
                  <ChevronRightIcon />
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  아이콘 + 텍스트
                </h3>
                <Button variant="outline" size="sm">
                  <GitBranchIcon /> New Branch
                </Button>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">
                  로딩 버튼
                </h3>
                <Button size="sm" disabled>
                  <Loader2Icon className="animate-spin" />
                  Please wait
                </Button>
              </div>
            </div>
          </div>

          {/* 아이콘이 있는 버튼들 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">아이콘 버튼들</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button variant="default" className="gap-2">
                <Palette className="h-4 w-4" />
                기본 + 아이콘
              </Button>
              <Button variant="destructive" className="gap-2">
                <Heart className="h-4 w-4" />
                위험 + 아이콘
              </Button>
              <Button variant="outline" className="gap-2">
                <Zap className="h-4 w-4" />
                외곽선 + 아이콘
              </Button>
              <Button variant="secondary" className="gap-2">
                <Settings className="h-4 w-4" />
                보조 + 아이콘
              </Button>
              <Button variant="ghost" className="gap-2">
                <Sun className="h-4 w-4" />
                고스트 + 아이콘
              </Button>
              <Button variant="link" className="gap-2">
                <Moon className="h-4 w-4" />
                링크 + 아이콘
              </Button>
            </div>
          </div>

          {/* 상태 테스트 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">상태 테스트</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button variant="default">정상 상태</Button>
              <Button variant="default" disabled>
                비활성화 상태
              </Button>
              <Button variant="outline" className="focus:ring-2">
                포커스 상태 (클릭해보세요)
              </Button>
            </div>
          </div>

          {/* 조합 테스트 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Size + Variant 조합</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">
                      Size \ Variant
                    </th>
                    {variants.map((variant) => (
                      <th
                        key={variant.name}
                        className="border border-border p-3 text-center"
                      >
                        {variant.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizes
                    .filter((size) => size.name !== "icon")
                    .map((size) => (
                      <tr key={size.name}>
                        <td className="border border-border p-3 font-medium">
                          {size.label}
                        </td>
                        {variants.map((variant) => (
                          <td
                            key={`${size.name}-${variant.name}`}
                            className="border border-border p-3"
                          >
                            <Button
                              size={size.name as any}
                              variant={variant.name as any}
                              className="w-full"
                            >
                              테스트
                            </Button>
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
