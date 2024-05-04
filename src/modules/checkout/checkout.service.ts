import { Injectable } from "@nestjs/common";

import { ProductRepo } from "modules/product/product.repo";
import { RedisService } from "services/redis/redis.service";

@Injectable()
export class CheckoutService {
  constructor(private readonly productRepo: ProductRepo, private readonly redisService: RedisService) {}

  async checkout() {
    const productId = 1;
    // acquire product lock
    const lock = await this.redisService.acquireProductLock(productId);
    // todo: update quantity and create order
    await this.redisService.releaseProductLock(lock);
  }
}
