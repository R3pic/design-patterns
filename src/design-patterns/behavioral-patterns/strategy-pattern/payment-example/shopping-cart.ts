import type { Product } from '@strategy-pattern/payment-example/product.ts';

export class ShoppingCart {
  constructor(
    private readonly products: Product[],
  ) {}

  getTotalPrice(): number {
    return this.products.reduce((pre, cur) => pre += cur.price, 0);
  }
}