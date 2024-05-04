import { Module } from "@nestjs/common";

import { ProductController } from "modules/product/product.controller";
import { ProductRepo } from "modules/product/product.repo";
import { ProductService } from "modules/product/product.service";
import { PrismaModule } from "services/prisma/prisma.module";
import { RedisModule } from "services/redis/redis.module";

@Module({
  imports: [PrismaModule, RedisModule],
  controllers: [ProductController],
  providers: [ProductService, ProductRepo],
  exports: [],
})
export class ProductModule {}
