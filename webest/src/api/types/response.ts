interface IPagination {
  page_count: number;
  page_number: number;
  page_size: number;
  total: number;
}

export interface IResponseWithList<T> extends IPagination {
  data: T[];
}