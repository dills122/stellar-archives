export interface PaginatedResource {
  count: number;
  next: string | null;
  previous: string | null;
  results: unknown[];
}
