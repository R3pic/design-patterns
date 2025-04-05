import type { Payable } from '@strategy-pattern/payment-example/payable.interface.ts';
import {Logger} from '@utils/logger.ts';

export class KakaoPay implements Payable {
  private static to = 'ABC 쇼핑몰';
  private readonly logger = new Logger(KakaoPay);

  constructor(
    private readonly customer: string,
  ) {}

  pay(amount: number): void {
    this.logger.log(`💛[카카오페이] ${this.customer}님이 ${KakaoPay.to}에게 ${amount}원 결제했습니다.`);
  }
}