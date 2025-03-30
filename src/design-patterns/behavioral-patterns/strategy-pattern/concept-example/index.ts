import {DesignPatternRunner} from '@utils/design-pattern-runner.ts';

import {Context} from './context';
import {ConcreteStrategyA} from './strategy-a';
import {ConcreteStrategyB} from './strategy-b';

export default class StrategyPatternConceptRunner extends DesignPatternRunner {
  run() {
    const context = new Context(new ConcreteStrategyA());

    this.logger.log("전략을 A로 설정했습니다. [일반 정렬]");
    context.doBusinessLogic();

    console.info('');

    this.logger.log("전략을 B로 설정했습니다. [뒤집기]");
    context.setStrategy(new ConcreteStrategyB());
    context.doBusinessLogic();
  }
}