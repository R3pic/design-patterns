import {Singleton} from '@singleton-pattern/ts-generic-example/singleton.ts';
import {Logger} from '@utils/logger.ts';
import type {BService} from '@singleton-pattern/ts-generic-example/b.service.ts';

export class AService extends Singleton<AService> {
  private readonly logger = new Logger(AService);

  constructor() {
    super();
    this.logger.log('AService 인스턴스가 생성되었습니다.');
  }

  doA() {
    this.logger.log('A');
  }
}