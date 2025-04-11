import {ExampleRunner} from '@example-runner';

import type {Payable} from '@strategy-pattern/payment-example/payable.interface.ts';
import {Product} from '@strategy-pattern/payment-example/product.ts';
import {Payment} from '@strategy-pattern/payment-example/payment.ts';
import {ShoppingCart} from '@strategy-pattern/payment-example/shopping-cart.ts';

import {BankTransfer} from '@strategy-pattern/payment-example/bank-transfer.payable.ts';
import {CreditCard} from '@strategy-pattern/payment-example/creditcard.payable.ts';
import {KakaoPay} from '@strategy-pattern/payment-example/kakaopay.payable.ts';

export default class StrategyPatternPaymentRunner extends ExampleRunner {
  static name = '전략 패턴 결제 예제';
  run(): void {
    const customers = ['홍길동', '강감찬', '이순신'];

    const shoppingCart = new ShoppingCart([
      new Product('A', 1000),
      new Product('B', 5000),
      new Product('C', 3500),
      new Product('D', 4000),
    ]);

    const totalPrice = shoppingCart.getTotalPrice();

    customers.forEach((customer, index) => {
      this.logger.log(`${index + 1}번째 요청입니다.`);
      const payStrategy = this.getRandomStrategy(customer);
      new Payment(payStrategy).process(totalPrice);
    });
  }

  private getRandomStrategy(customer: string): Payable {
    const payStrategyList = ['신용카드', '계좌이체', '카카오페이'];
    const creditCardCompanyList = ['신한카드', '현대카드', '국민카드'];
    const bankList = ['국민은행', '기업은행', '카카오뱅크'];

    const getRandom = (max: number) => Math.floor(Math.random() * max);
    const getRandomPayStrategy = () => payStrategyList[getRandom(payStrategyList.length)];
    const getRandomCreditCardCompany = () => creditCardCompanyList[getRandom(creditCardCompanyList.length)];
    const getRandomBank = () => bankList[getRandom(bankList.length)];

    let payStrategy: Payable;

    const selected = getRandomPayStrategy();
    this.logger.log(`${customer}님이 결제 방식으로 [${selected}]를 선택했습니다.`);
    if (selected === '신용카드') {
      payStrategy = new CreditCard(getRandomCreditCardCompany(), customer);
    } else if (selected === '계좌이체') {
      payStrategy = new BankTransfer(getRandomBank(), customer);
    } else if (selected === '카카오페이') {
      payStrategy = new KakaoPay(customer);
    } else {
      throw new Error('지원하지 않는 결제 방식입니다.');
    }

    return payStrategy;
  }
}