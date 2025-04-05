import type { Payable } from '@strategy-pattern/payment-example/payable.interface.ts';

export class Payment {
  constructor(
    private payable: Payable,
  ) {}

  process(amount: number) {
    this.payable.pay(amount);
  }
}