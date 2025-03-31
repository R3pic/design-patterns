import {ExampleRunner} from '@example-runner';

import {Navigator} from './navigator.ts';
import {WalkingStrategy} from './walking-strategy.ts';
import {PublicTransportStrategy} from './public-transport-strategy.ts';

export default class StrategyPatternRouteRunner extends ExampleRunner {
  run() {
    const navigator = new Navigator(new WalkingStrategy());

    this.logger.log("전략을 도보로 설정하였습니다.");
    navigator.route("A", "B");
    navigator.route("B", "A");

    navigator.setStrategy(new PublicTransportStrategy());

    this.logger.log("전략을 대중 교통으로 설정하였습니다.")
    navigator.route("C", "D");
    navigator.route("D", "C");
  }
}