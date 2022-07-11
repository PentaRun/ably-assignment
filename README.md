# Ably Assignment

<br/>

#### 🚀 Run Project

```
yarn
yarn dev

(ready on http://localhost:8080)
```

#### ⚙️ Project Structure

```
├── apps
│   └── assignment
├── libs
│   └── hs-core-ui
│
└── tsconfig.base.json
```

<br/>

#### 🛠 Stacks

- NX
  - 모노레포 도구중 하나인 NX를 도입했습니다. 평소 개인 프로젝트에서 사용하던 공용 컴포넌트(hs-core-ui)를 도입했고, 사전과제의 경우에는 프로젝트의 규모가 작지만 추후 규모가 커질경우를 대비해 코드의 재사용 및 공용 컴포넌트를 위한 모노레포를 도입했습니다.
- TypeScript
  - 정적 타입의 언어로 코드 작성 단계에서 타입 체크를 할 수 있고, 에러를 방지할 수 있습니다. 타입을 일일이 지정해야 하는 번거로움이 있지만 프로젝트의 규모가 커질경우 유지보수의 용이성 등 장점이 있습니다.
- Next.js
  - React에서 손쉽게 SSR, SSG, 폴더구조의 라우팅 등을 제공하는 프레임워크. 사전과제의 경우 소규모의 페이지 뿐이지만 추후 SEO 최적화를 위한 SSR을 비롯해 다양한 기능을 제공하고 있습니다.
- Mobx
  - 전역상태 관리 라이브러리. Redux와 달리 번잡한 보일러플레이트 코드를 데코레이터를 사용해 깔끔하게 작성할 수 있고 보다 객체지향적 입니다.
- Emotion
  - CSS-in-JS 라이브러리중 하나로 styled-components보다 가볍고 css prop등을 활용해 보다 생산적으로 css 스타일링을 활용할 수 있습니다.

<br/>
