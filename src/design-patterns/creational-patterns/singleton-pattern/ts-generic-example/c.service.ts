import {Singleton} from '@singleton-pattern/ts-generic-example/singleton.ts';
import {Logger} from '@utils/logger.ts';
import type {BService} from '@singleton-pattern/ts-generic-example/b.service.ts';

export class CService extends Singleton<BService> {
  private readonly logger = new Logger(CService);

  constructor() {
    super();
    this.logger.log('CService 인스턴스가 생성되었습니다.');
  }

  doB() {
    this.logger.log('C');
  }
}