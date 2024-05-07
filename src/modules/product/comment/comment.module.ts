import { Module } from "@nestjs/common";

import { CommentController } from "modules/product/comment/comment.controller";
import { CommentService } from "modules/product/comment/comment.service";
import { PrismaModule } from "services/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [],
})
export class CommentModule {}
