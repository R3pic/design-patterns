import type {Payable} from '@strategy-pattern/payment-example/payable.interface.ts';
import {Logger} from '@utils/logger.ts';

export class BankTransfer implements Payable {
  private static to = 'ABC 쇼핑몰';
  private readonly logger = new Logger(BankTransfer);

  constructor(
    private readonly bank: string,
    private readonly customer: string,
  ) {
    this.logger.log(`${customer}님이 ${bank}를 선택했습니다.`);
  }

  pay(amount: number): void {
    this.logger.log(`📧 [${this.bank}] ${this.customer}님이 ${amount}원을 ${BankTransfer.to}님에게 송금했습니다.`);
  }
}