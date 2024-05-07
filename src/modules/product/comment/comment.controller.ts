import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { HasRoles } from "modules/auth/auth.has-roles.decorator";
import { CommentService } from "modules/product/comment/comment.service";
import { Role } from "shared/constants/global.constants";

@ApiTags("Products")
@Controller("/comments")
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get("/")
  @HasRoles(Role.PUBLIC)
  async getList() {
    return "{ data: products };";
  }

  @Get("/count")
  @HasRoles(Role.PUBLIC)
  async count() {
    return "this.productService.count(query)";
  }

  @Get("/:id")
  @HasRoles(Role.PUBLIC)
  async getOne() {
    return "product";
  }
}
