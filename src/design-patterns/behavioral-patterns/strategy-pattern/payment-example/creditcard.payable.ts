import type {Payable} from '@strategy-pattern/payment-example/payable.interface.ts';
import {Logger} from '@utils/logger.ts';

export class CreditCard implements Payable {
  private static to = 'ABC 쇼핑몰';
  private readonly logger = new Logger(CreditCard);

  constructor(
    private readonly company: string,
    private readonly customer: string,
  ) {
    this.logger.log(`${customer}님이 ${company}를 선택했습니다.`);
  }

  pay(amount: number): void {
    this.logger.log(`💳 [${this.company}] ${this.customer}님이 ${CreditCard.to}에게 ${amount}원 결제되었습니다.`);
  }
}