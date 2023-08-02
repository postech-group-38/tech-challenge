export abstract class Filter {
  readonly limit: number;
  constructor(readonly query, readonly offset = 0, limit = 10) {
    if (Number.isNaN(offset)) {
      this.offset = 0;
    }
    if (Number.isNaN(limit)) {
      limit = 10;
    }
    if (limit <= 0) {
      limit = 10;
    }
    this.limit = Math.min(limit, 100);
  }
}
