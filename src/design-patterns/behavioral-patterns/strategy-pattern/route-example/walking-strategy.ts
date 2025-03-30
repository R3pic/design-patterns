import type {RouteStrategy} from './route-strategy.interface';
import {Logger} from '@utils/logger.ts';

export class WalkingStrategy implements RouteStrategy {
  private readonly logger = new Logger(WalkingStrategy);

  buildRoute(from: string, to: string) {
    this.logger.log(`${from} 부터 ${to}까지의 도보 경로 생성: 4km, 30분`);
  }
}