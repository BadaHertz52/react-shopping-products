# react-shopping-products

## 배포

[🌟 배포 페이지 바로가기](https://badahertz52.github.io/react-shopping-products/)

### 구현 화면

#### step1

<img src="./readmeImages/step1.gif" height="500px" />

### 오류 화면

#### 페이지 렌더링 시 api 요청 오류 화면

<img src="./readmeImages/pageError.png" width="400px" alt="페이지 렌더링 시 api 요청 오류 화면">

## 기술 스택

- React (with Vite)
- TypeScript
- css module
- 테스트 : vitest, msw

## 빌드 및 테스트

```dash
//빌드
npm run build

//테스트
npm run test
```

## 기능 구현 목록

<details>
  <summary>1단계 기능 구현 목록</summary>
  <div markdown="1">

### 상품 목록 조회

- /products API로 상품 목록 데이터를 가져온다.
  - 맨 처음 불러 오는 갯수는 20개다.
  - 이 후 추가로는 4개씩 불러온다. -상품 목록을 무한스크롤 방식으로 표시한다.

### 상품 정렬 및 필터링

- 상품 필터링

  - 카테고리

  전체:cateogory 빈칸
  fashion :패션의류/잡화
  beverage :음료
  electronics : 가전 디지털
  kitchen : 주방용품
  fitness : 운동
  books :도서

- 상품 정렬
  - 낮은 가격 순
  - 높은 가격 순

### 상품 장바구니 담기

- 사용자가 담기 버튼을 누르면, 장바구니에 추가된다.

  - 이 때 장바구니에 담긴 아이템 '종류' 의 갯수로 숫자를 표시한다.
  - 장바구니 담기 요청 중 에러가 발생한 경우, 에러 메시지를 사용자에게 알려주는 UI를 표시한다.

- 장바구니에서 빼기 버튼을 누르면, 장바구니에서 해당 아이템이 제거된다.

  - 이 때 장바구니에 담긴 아이템 '종류' 의 갯수로 숫자를 표시한다.
  - 장바구니 담기 요청 중 에러가 발생한 경우, 에러 메시지를 사용자에게 알려주는 UI를 표시한다.

    </div>
  </details>
