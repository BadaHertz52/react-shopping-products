import { ApiResponse } from '@src/appTypes';

interface MakeServerResponseParams<T> {
  page: number;
  size: number;
  last?: boolean;
  content: T;
}
export function makeServerResponse<T>({
  page,
  size,
  last = false,
  content,
}: MakeServerResponseParams<T>): ApiResponse<T> {
  return {
    content,
    pageable: {
      sort: {
        sorted: false,
        unsorted: true,
        empty: true,
      },
      pageNumber: page,
      pageSize: size,
      offset: 0,
      paged: true,
      unpaged: false,
    },
    last,
    totalPages: 100,
    totalElements: 100,
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    first: true,
    number: 0,
    numberOfElements: 100,
    size,
    empty: false,
  };
}
