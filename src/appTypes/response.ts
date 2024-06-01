/**
 * 서버 응답의 공통 구조를 정의하는 인터페이스
 * @template T - response의 content타입
 */
export interface ApiResponse<T> {
  totalPages: number;
  totalElements: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  first: boolean;
  last: boolean;
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
    offset: number;
  };
  number: number;
  numberOfElements: number;
  size: number;
  content: T;
  empty: boolean;
}
