import type { Strategy } from './strategy.interface.ts';
import { Logger } from '@utils/logger.ts';

export class Context {
  private readonly logger = Logger.create(Context);
  constructor(private strategy: Strategy) {}

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doBusinessLogic() {
    this.logger.log("전략에 따라 데이터를 정렬합니다. 무슨 전략인지는 모릅니다.");
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    this.logger.log(result.join(", "));
  }
}