import type {RouteStrategy} from './route-strategy.interface';
import {Logger} from '@utils/logger.ts';

export class PublicTransportStrategy implements RouteStrategy {
  private readonly logger = new Logger(PublicTransportStrategy);

  buildRoute(from: string, to: string) {
    this.logger.log(`${from} 부터 ${to}까지의 대중교통 경로 생성: 3km, 5분`);
  }
}