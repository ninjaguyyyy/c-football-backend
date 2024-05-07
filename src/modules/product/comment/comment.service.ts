import { Injectable } from "@nestjs/common";

@Injectable()
export class CommentService {
  constructor() {}

  async getList() {
    return "aa";
  }

  count() {
    return 1;
  }
}
