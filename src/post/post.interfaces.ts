export interface IPostPayload {
  title: string;
  content: string;
  published: boolean;
}

export interface IPostParams {
  size: number;
  page: number;
  search: string;
}
