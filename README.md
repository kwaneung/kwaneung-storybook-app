# @kwaneung/design-system

**Next.js + Storybook + npm 배포**까지 포함된 완전한 디자인 시스템 개발 프로젝트입니다.

## 🎯 프로젝트 목적

이 프로젝트는 **디자인 시스템을 처음부터 끝까지 개발하는 과정**을 보여줍니다:

1. **🎨 디자인 시스템 개발** - 접근성을 고려한 React 컴포넌트 라이브러리
2. **⚡ Next.js 구현** - 실제 애플리케이션에서 컴포넌트 테스트 및 사용
3. **📚 Storybook 문서화** - 컴포넌트 문서화 및 시각적 테스트
4. **📦 npm 배포** - 실제 프로덕션 환경에서 사용 가능한 패키지 배포

## 🚀 특징

- 🎯 **접근성 중심**: 사용자 브라우저 설정을 존중하는 rem 기반 폰트 크기 조절
- 🎨 **shadcn/ui 스타일**: 현대적이고 세련된 UI 컴포넌트
- 🌙 **다크 모드 지원**: next-themes와 완벽 호환
- 📱 **반응형**: 모바일부터 데스크톱까지 대응
- 🛠 **TypeScript**: 완전한 타입 지원
- 📚 **Storybook**: 컴포넌트 문서화 및 시각적 테스트
- 📦 **npm 배포**: 실제 사용 가능한 패키지

## 🏗️ 프로젝트 구조

```
kwaneung-storybook-app/
├── components/          # 디자인 시스템 컴포넌트
│   └── ui/
│       └── button.tsx   # Button 컴포넌트
├── lib/                 # 유틸리티 및 컨텍스트
│   ├── font-size-context.tsx  # 폰트 크기 조절 시스템
│   └── utils.ts         # 유틸리티 함수
├── app/                 # Next.js 앱 (실제 구현 테스트)
│   ├── test-buttons/    # 버튼 컴포넌트 테스트 페이지
│   └── ...
├── stories/             # Storybook 스토리
│   ├── Button.stories.ts
│   ├── ShadcnButton.stories.tsx
│   └── FontSizeTest.stories.tsx
├── .storybook/          # Storybook 설정
├── dist/                # 빌드된 라이브러리
├── index.ts             # 라이브러리 진입점
├── tsup.config.ts       # 빌드 설정
└── package.json         # 패키지 정보
```

## 🛠️ 개발 환경 설정

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
# Next.js 개발 서버
pnpm dev

# Storybook 개발 서버
pnpm storybook
```

### 3. 라이브러리 빌드

```bash
# 라이브러리 빌드
pnpm build-lib

# 빌드 결과 확인
pnpm pack --dry-run
```

## 📚 개발 프로세스

### 1단계: 컴포넌트 개발

- `components/ui/` 폴더에 컴포넌트 구현
- `lib/` 폴더에 유틸리티 및 컨텍스트 구현
- TypeScript로 완전한 타입 지원

### 2단계: Next.js에서 테스트

- `app/` 폴더에서 실제 애플리케이션 구현
- 컴포넌트 동작 확인 및 버그 수정
- 다크 모드, 반응형 등 실제 환경 테스트

### 3단계: Storybook 문서화

- `stories/` 폴더에 컴포넌트 스토리 작성
- 다양한 상태와 프로퍼티 조합 테스트
- 시각적 회귀 테스트 및 접근성 테스트

### 4단계: npm 배포

- `tsup`으로 라이브러리 빌드
- TypeScript 타입 정의 생성
- npm 레지스트리에 배포

## 🎨 포함된 컴포넌트

### Button 컴포넌트

```tsx
import { Button } from "@kwaneung/design-system";

<Button variant="default" size="lg">
  클릭하세요
</Button>;
```

**지원하는 variants:**

- `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`

**지원하는 sizes:**

- `default`, `sm`, `lg`, `icon`

### FontSize 시스템

```tsx
import { FontSizeProvider, useFontSize } from "@kwaneung/design-system";

function App() {
  return (
    <FontSizeProvider>
      <YourComponents />
    </FontSizeProvider>
  );
}
```

**지원하는 폰트 크기:**

- `normal` (100%)
- `large` (125%)
- `extra-large` (150%)

## 📦 npm 패키지 사용법

다른 프로젝트에서 이 디자인 시스템을 사용하려면:

### 설치

```bash
npm install @kwaneung/design-system
```

### 사용법

```tsx
import { Button, FontSizeProvider } from "@kwaneung/design-system";

function MyApp() {
  return (
    <FontSizeProvider>
      <Button variant="default">디자인 시스템 버튼</Button>
    </FontSizeProvider>
  );
}
```

### CSS 설정

```css
/* 폰트 크기 조절 시스템 */
html[data-font-size="normal"] {
  font-size: 100%;
}
html[data-font-size="large"] {
  font-size: 125%;
}
html[data-font-size="extra-large"] {
  font-size: 150%;
}
```

## 🔧 기술 스택

- **React 19** - UI 라이브러리
- **Next.js 15** - 풀스택 React 프레임워크
- **TypeScript** - 정적 타입 검사
- **Tailwind CSS** - 유틸리티 기반 CSS
- **Storybook 9** - 컴포넌트 문서화
- **tsup** - 라이브러리 빌드 도구
- **shadcn/ui** - 디자인 시스템 기반
- **Radix UI** - 접근성 지원 헤드리스 컴포넌트

## 🎯 학습 목표

이 프로젝트를 통해 다음을 배울 수 있습니다:

1. **디자인 시스템 설계** - 일관된 UI 컴포넌트 라이브러리 구축
2. **접근성 구현** - 폰트 크기 조절, 키보드 네비게이션 등
3. **Next.js 실무** - 실제 프로덕션 환경에서의 React 개발
4. **Storybook 활용** - 컴포넌트 문서화 및 시각적 테스트
5. **npm 배포** - 오픈소스 패키지 배포 프로세스
6. **TypeScript 실무** - 라이브러리 수준의 타입 안정성

## 📄 라이센스

MIT License

## 🤝 기여

이슈나 풀 리퀘스트를 언제든지 환영합니다!

---

**Made with ❤️ by kwaneung**

_디자인 시스템을 처음부터 끝까지 개발하는 완전한 가이드_
