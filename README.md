# CSS Flex study repo

## info

> - date : 2025.07.07(월) - 07.14(월)
> - 목적 : CSS Flex 학습

## 실행 방법

```
bun install
bun run build
bun run preview # localhost 4723
```

## 수행한 내용

1. **Case 1** ([/src/page/1](/src/page/1))

   - 레이아웃: 기본 세로 방향 Flex 레이아웃
   - 구성: Header(상단 고정), Main(콘텐츠 리스트), Footer
   - 특징: 헤더는 sticky, 메인은 flex column으로 여러 요소 배치

2. **Case 2** ([/src/page/2](/src/page/2))

   - 레이아웃: 가로/세로 스크롤 가능한 Flex row & column
   - 구성: row-container(가로 스크롤), col-container(세로 스크롤)
   - 특징: 각각 flex row/column으로 아이템을 배치, 스크롤 처리

3. **Case 3** ([/src/page/3](/src/page/3))

   - 레이아웃: 여러 아이템을 flex row로 wrap 하여 배치
   - 구성: 100개의 아이템을 한 줄에 3개씩, 공간 부족 시 자동 줄바꿈
   - 특징: flex-wrap, flex-basis, min-width 등으로 반응형 그리드 구현

4. **Case 4** ([/src/page/4](/src/page/4))

   - 레이아웃: Holy Grail Layout (헤더-본문-푸터, 좌/우 사이드바)
   - 구성: Header, Left Sidebar, Main Content, Right Sidebar, Footer
   - 특징: flex로 3열 본문, 반응형 미디어 쿼리로 모바일 대응

5. **Case 5** ([/src/page/5](/src/page/5))
   - 레이아웃: Article + Sidebar 2단 레이아웃
   - 구성: Header, Main(Article + Aside), Footer
   - 특징:
     - flex row로 본문과 사이드바 배치, 모바일에서 column으로 변경
     - 공통적으로 다양한 Flexbox 속성(flex-direction, flex-wrap, flex-basis, flex-grow, flex-shrink 등)과 반응형 미디어 쿼리를 활용하여 여러 레이아웃 패턴을 실습
